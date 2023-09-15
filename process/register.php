<?php

require_once('connection.php');

if($conn == null) {
    return;
}

$email = $_POST['email'];
$password = $_POST['password'];

// Query the database to check if the user exists
$query = "SELECT * FROM users WHERE `email` = '$email' AND `password` = '$password'";
$result = $conn->query($query);

$response = new stdClass();

if ($result->num_rows > 0) {
    // Authentication failed
    $response->status = 'error';
    $response->message = 'Already Exists';
} else {
    // Authentication successful
    $register_query = "INSERT INTO users (`email`, `password`) VALUES ('$email', '$password')";
    $register_result = $conn->query($register_query);

    if ($register_result) {
        $response->status = 'success';
        $response->message = 'User Registered Successfully';
    } else {
        $response->status = 'warning';
        $response->message = 'Error While Registering';
    }
}

echo json_encode($response);
