CREATE DATABASE example;
USE example;
CREATE TABLE users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 email VARCHAR(50) NOT NULL
);

INSERT INTO users (name,email)
VALUES('Rohan','rsd3565@rit.edu');


INSERT INTO users (name,email)
VALUES('Tom','tmc2562@rit.edu');

INSERT INTO users (name,email)
VALUES('Sagar','sad2999@rit.edu');