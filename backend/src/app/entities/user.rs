use chrono::{DateTime, Local};
use uuid::Uuid;
use super::password::Password;

pub struct User {
    id: Uuid,
    name: String,
    email: String,
    password: Password,
    created_at: DateTime<Local>,
    updated_at: DateTime<Local>,
}

impl User {
    // Constructor for creating a new User
    pub fn new(id: Uuid, name: String, email: String, password: String) -> Self {
        Self {
            id,
            name,
            email,
            password: Password::new(password),
            created_at: Local::now(),
            updated_at: Local::now(),
        }
    }

    // Getter for `id`
    pub fn get_id(&self) -> &Uuid {
        &self.id
    }


    // Getter for `name`
    pub fn get_name(&self) -> &String {
        &self.name
    }

    // Setter for `name`
    pub fn set_name(&mut self, name: String) {
        self.name = name;
    }

    // Getter for `email`
    pub fn get_email(&self) -> &String {
        &self.email
    }

    // Setter for `email`
    pub fn set_email(&mut self, email: String) {
        self.email = email;
    }

    // Getter for `country`
    pub fn get_password(&self) -> &String {
        &self.password.get_value()
    }

    // Setter for `password`
    pub fn set_password(&mut self, password: String) {
        self.password.set_value(password);
    }

    // Getter for `created_at`
    pub fn get_created_at(&self) -> &DateTime<Local> {
        &self.created_at
    }

    // Setter for `created_at`
    pub fn set_created_at(&mut self, created_at: DateTime<Local>) {
        self.created_at = created_at;
    }

    // Getter for `updated_at`
    pub fn get_updated_at(&self) -> &DateTime<Local> {
        &self.updated_at
    }

    // Setter for `updated_at`
    pub fn set_updated_at(&mut self, updated_at: DateTime<Local>) {
        self.updated_at = updated_at;
    }
}