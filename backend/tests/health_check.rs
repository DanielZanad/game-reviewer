use std::net::TcpListener;
use sqlx::PgPool;
use backend::{configuration::get_configuration, startup::run};

pub struct TestApp {
    pub address: String,
    pub db_pool: PgPool,
}

#[tokio::test]

// the health check is exposed at /health_check;
// the health check is behind a GET method;
// the health check always returns a 200;
// the health check’s response has no body.
async fn health_check_works() {
    // Arrange
    let app = spawn_app().await;
    let client = reqwest::Client::new();

    // Act
    let response = client
        .get(&format!("{}/health_check", &app.address))
        .send()
        .await
        .expect("Failed to execute request");

    // Assert
    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}

// Launch application in the background ~somehow~
async fn spawn_app() -> TestApp{
    let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
    let port = listener.local_addr().unwrap().port();
    let address = format!("http://127.0.0.1:{}", port);

    let configuration = get_configuration().expect("Failed to read configuration");
    let connection_pool = PgPool::connect(&configuration.database.connection_string()).await.expect("Failed to connect to Postgres");

    let server = run(listener, connection_pool.clone()).expect("Failed to bind address");

    // Launch the server as a background task
    // tokio::spawn returns a handle to the spawned future
    // but we have no use for it here, hence the non-binding let
    let _ = tokio::spawn(server);

    TestApp {
        address,
        db_pool: connection_pool
    }
}
