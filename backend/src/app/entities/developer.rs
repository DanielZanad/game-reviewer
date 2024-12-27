use chrono::{DateTime, Local};

pub struct Developer {
    id: String,
    name: String,
    founded_date: DateTime<Local> ,
    country: String 
}

impl Developer {
    // Constructor for creating a new Developer
    pub fn new(id: String, name: String, founded_date: DateTime<Local>, country: String) -> Self {
        Self {
            id,
            name,
            founded_date,
            country,
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

    // Getter for `name`
    pub fn get_name(&self) -> &String {
        &self.name
    }

    // Setter for `name`
    pub fn set_name(&mut self, name: String) {
        self.name = name;
    }

    // Getter for `founded_date`
    pub fn get_founded_date(&self) -> &DateTime<Local> {
        &self.founded_date
    }

    // Setter for `founded_date`
    pub fn set_founded_date(&mut self, founded_date: DateTime<Local>) {
        self.founded_date = founded_date;
    }

    // Getter for `country`
    pub fn get_country(&self) -> &String {
        &self.country
    }

    // Setter for `country`
    pub fn set_country(&mut self, country: String) {
        self.country = country;
    }
}