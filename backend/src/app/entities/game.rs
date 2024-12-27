use chrono::{DateTime, Local};
use super::{developer::Developer, publisher::Publisher};

pub struct Game {
    id: String,
    title: String,
    publisher: Publisher,
    developer: Developer,
    synopsis: String,
    created_at: DateTime<Local>    
}

impl Game {
    // Constructor for creating a new Game
    pub fn new(
        id: String,
        title: String,
        publisher: Publisher,
        developer: Developer,
        synopsis: String,
        created_at: DateTime<Local>,
    ) -> Self {
        Self {
            id,
            title,
            publisher,
            developer,
            synopsis,
            created_at,
        }
    }

    // Getter for `id`
    pub fn get_id(&self) -> &String {
        &self.id
    }

    // Setter for `id`
    pub fn set_id(&mut self, id: String) {
        self.id = id;
    }

    // Getter for `title`
    pub fn get_title(&self) -> &String {
        &self.title
    }

    // Setter for `title`
    pub fn set_title(&mut self, title: String) {
        self.title = title;
    }

    // Getter for `publisher`
    pub fn get_publisher(&self) -> &Publisher {
        &self.publisher
    }

    // Setter for `publisher`
    pub fn set_publisher(&mut self, publisher: Publisher) {
        self.publisher = publisher;
    }

    // Getter for `developer`
    pub fn get_developer(&self) -> &Developer {
        &self.developer
    }

    // Setter for `developer`
    pub fn set_developer(&mut self, developer: Developer) {
        self.developer = developer;
    }

    // Getter for `synopsis`
    pub fn get_synopsis(&self) -> &String {
        &self.synopsis
    }

    // Setter for `synopsis`
    pub fn set_synopsis(&mut self, synopsis: String) {
        self.synopsis = synopsis;
    }

    // Getter for `created_at`
    pub fn get_created_at(&self) -> &DateTime<Local> {
        &self.created_at
    }

    // Setter for `created_at`
    pub fn set_created_at(&mut self, created_at: DateTime<Local>) {
        self.created_at = created_at;
    }
}