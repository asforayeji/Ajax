<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

$data = $_POST; // this is lowercase, not $Data

$result = [];

if ($data['username'] == 'admin@example.com' && $data['password'] == 'admin123') {
    $result['success'] = true;
    $result['message'] = 'Login successful';
} else {
    $result['success'] = false;
    $result['message'] = 'Login failed';
}

echo json_encode($result);
