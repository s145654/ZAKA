-- Database setup for ZAKA Gaming Platform
CREATE DATABASE IF NOT EXISTS zaka_db;
USE zaka_db;

-- Table for Games
CREATE TABLE IF NOT EXISTS games (
    id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    price VARCHAR(20) NOT NULL,
    rating DECIMAL(2,1) NOT NULL
);

-- Table for Developers
CREATE TABLE IF NOT EXISTS developers (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    studio VARCHAR(100) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    experience VARCHAR(50) NOT NULL
);

-- Table for Feedback
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    experience VARCHAR(20) NOT NULL,
    source VARCHAR(50),
    feedback_text TEXT NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Users (from registration form)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data for Games
INSERT INTO games (id, title, genre, price, rating) VALUES
('G001', 'Fortnite', 'Battle Royale', 'Free', 4.8),
('G002', 'Minecraft', 'Sandbox', '$29.99', 4.9),
('G003', 'Valorant', 'Tactical Shooter', 'Free', 4.7),
('G004', 'Call of Duty: Black Ops 7', 'FPS', '$49.99', 4.5),
('G005', 'Apex Legends', 'Battle Royale', 'Free', 4.6);

-- Insert sample data for Developers
INSERT INTO developers (id, name, studio, specialty, experience) VALUES
('D001', 'Adnan AL-Sheikh', 'ZAKA Labs', 'Leadership & Strategy', '6 Years'),
('D002', 'Khaled Al-Jabri', 'ZAKA Labs', 'Full Stack Development', '4 Years'),
('D003', 'Moayad AL-Sawafi', 'ZAKA Labs', 'UI/UX & Frontend', '3 Years'),
('D004', 'Ziyad Al-Hinai', 'ZAKA Labs', 'Game Logic & AI', '5 Years'),
('D005', 'Ali Al-Rashdi', 'Muscat Games', '2D Art', '2 Years');
