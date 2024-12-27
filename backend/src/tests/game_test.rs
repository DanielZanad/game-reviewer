use chrono::{DateTime, Local};

use crate::app::entities::{
    developer::{self, Developer},
    game::Game,
    publisher::Publisher,
};

#[test]
fn it_should_create_a_game() {
    let date = Local::now();

    let publisher = Publisher::new(
        String::from("id"),
        String::from("name"),
        date,
        String::from("country"),
    );

    let developer = Developer::new(
        String::from("id"),
        String::from("name"),
        date,
        String::from("country"),
    );

    let game = Game::new(
        String::from("id"),
        String::from("title"),
        publisher,
        developer,
        String::from("synopsis"),
        date,
    );

    assert_eq!(game.get_id(), "id");
    assert_eq!(game.get_title(), "title");
    assert_eq!(game.get_synopsis(), "synopsis");
    assert_eq!(game.get_created_at(), &date);
}
