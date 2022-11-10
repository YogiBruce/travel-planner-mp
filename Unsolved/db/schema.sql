DROP DATABASE IF EXISTS traveller_db
CREATE DATABASE traveller_db

USE traveller_db

CREATE TABLE Traveller (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT INT,
    email
)



CREATE TABLE Location (
id INT AUTO_INCREMENT PRIMARY KEY,
location_name
);

CREATE TABLE Trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trip_budeget INTEGER(20),
    traveller_amount INTEGER(20)
)