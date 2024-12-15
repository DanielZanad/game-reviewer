use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer, Responder};

async fn health_check(_req: HttpRequest) -> impl Responder {
    HttpResponse::Ok().finish()
}

pub async fn run() -> std::io::Result<()> {
    HttpServer::new(|| App::new().route("/", web::get().to(health_check)))
        .bind("127.0.0.1:8000")?
        .run()
        .await
}