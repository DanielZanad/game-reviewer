use std::net::TcpListener;
use crate::routes::health_check;
use actix_web::{dev::Server, web, App, HttpRequest, HttpResponse, HttpServer, Responder};
use sqlx::PgPool;



pub fn run(listener: TcpListener, db_pool: PgPool) -> Result<Server, std::io::Error> {
    let db_pool = web::Data::new(db_pool);

    let server = HttpServer::new(move|| {
        App::new()
            .route("/health_check", web::get().to(health_check))
            .app_data(db_pool.clone())
    })
    .listen(listener)?
    .run();
    Ok(server)
}
