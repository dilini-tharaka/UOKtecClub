<?php
$servername = "localhost"; // Change this to your database server hostname if needed
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "tech_club_db"; // Change this to your database name

$conn = null;

// Create a connection to the database
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
} catch(mysqli_sql_exception $e) {
    $response = new stdClass();
    $response->status = 'error';
    $response->message = 'Error While Connecting To Database!!!';

    echo json_encode($response);
}