<?php
// Database connection configuration for XAMPP
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zaka_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
