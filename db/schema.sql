DROP DATABASE IF EXISTS Khana_db;
CREATE DATABASE Khana_db;
USE Khana_db;

CREATE TABLE Khana(
    ID INT NOT NULL AUTO_INCREMENT,
    khana_name VARCHAR(50),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (ID)
);