-- Add migration script here
CREATE TABLE games(
    id uuid PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    launch_year TIMESTAMP NOT NULL,
    publisher VARCHAR(255),
    developer VARCHAR(255),
    synopsis TEXT
);