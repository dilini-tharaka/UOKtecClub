<?php

require_once('connection.php');

if($conn == null) {
    return;
}

$data = json_decode($_POST['data']);

$email = $data->email;
$password = $data->password;

// Query the database to check if the user exists
$query = "SELECT * FROM users WHERE `email` = '$email' AND `password` = '$password'";
$result = $conn->query($query);

$response = new stdClass();

if ($result->num_rows > 0) {
    // Authentication successful
    $response->status = 'success';

} else {
    // Authentication failed
    $response->status = 'error';
}

echo json_encode($response);