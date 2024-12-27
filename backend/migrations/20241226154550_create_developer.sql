-- Add migration script here
CREATE TABLE developer (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    founded_date TIMESTAMP NOT NULL
);