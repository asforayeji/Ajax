<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

$rawData = file_get_contents('php://input');
$Data = json_decode($rawData, true);

// $submitedData = [
//     'the-username' => $Data['username'],
//     'the-password' => $Data['password']
// ];

// echo json_encode($submitedData);

$result =[]; 

if($Data['username'] == 'admin@example.com' && $Data['password'] == 'password123'){
    $result['success'] = true;
    $result['message'] = 'Login successful';
} else{
    $result['success'] = false;
    $result['message'] = 'Login failed';
}


echo json_encode($result);





