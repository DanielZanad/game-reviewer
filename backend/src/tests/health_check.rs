use crate::configuration::{get_configuration, DatabaseSettings};
use crate::startup::run;
use sqlx::{Connection, PgConnection, PgPool, Executor};
use std::net::TcpListener;
use uuid::Uuid;
use reqwest::Client;

pub struct TestApp {
    pub address: String,
    pub db_pool: PgPool,
}

// Launch our application in the background
async fn spawn_app() -> TestApp {
    let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
    let port = listener.local_addr().unwrap().port();
    let address = format!("http://127.0.0.1:{}", port);

    let mut configuration = get_configuration().expect("Failed to read configuration.");
    configuration.database.database_name = Uuid::new_v4().to_string();
    let connection_pool = configure_database(&configuration.database).await;

    let server = run(listener, connection_pool.clone()).expect("Failed to bind address");
    let _ = tokio::spawn(server);
    TestApp {
        address,
        db_pool: connection_pool,
    }
}

pub async fn configure_database(config: &DatabaseSettings) -> PgPool {
    // Create database
    let mut connection = PgConnection::connect(&config.connection_string_without_db())
        .await
        .expect("Failed to connect to Postgres");

    let create_database_query = format!(r#"CREATE DATABASE "{}";"#, config.database_name);
    sqlx::query(&create_database_query)
        .execute(&mut connection)
        .await
        .expect("Failed to create database.");

    // Migrate database
    let connection_pool = PgPool::connect(&config.connection_string())
        .await
        .expect("Failed to connect to Postgres.");
    sqlx::migrate!("./migrations")
        .run(&connection_pool)
        .await
        .expect("Failed to migrate the database");
    connection_pool
}

#[tokio::test]
async fn health_check_works() {
    // Arrange
    let test_app = spawn_app().await;
    spawn_app().await;
    // We need to bring in `reqwest`
    // to perform HTTP requests against our application
    let client = Client::new();

    // Act
    let response = client
        .get(&format!("{}/health_check", test_app.address))
        .send()
        .await
        .expect("Failed to execute request");

    // Assert'
    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}
