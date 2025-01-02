pub struct Password {
    password: String
}

impl Password {
    // Constructor for creating a new Password
    pub fn new(password: String) -> Self {
        if Self::validate_password_length(&password) {
            panic!("Password must be between 6 and 230 characters long");
        }
        if Self::validate_numbers(&password) {
            panic!("Password must contain at least one number");
        }

        Self {
            password
        }
    }

    // Getter for `password`
    pub fn get_value(&self) -> &String {
        &self.password
    }

    // Setter for `password`
    pub fn set_value(&mut self, password: String) {
        self.password = password;
    }
    

    fn validate_password_length(password: &str) -> bool {
        password.len() >= 6 && password.len() <= 230
    }

    fn validate_numbers(password: &str) -> bool {
        // Return true if there is numbers and characters in password
        !password.chars().all(|c| c.is_digit(10))
    }
}