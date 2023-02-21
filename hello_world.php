<?php

// Get the file that was uploaded
$file = $_FILES['file']['tmp_name'];

// Get the file name
$file_name = $_FILES['file']['name'];

// Load the Google API client library
require_once 'vendor/autoload.php';

// Get your client ID and secret from the Google API Console
$client_id = 'YOUR_CLIENT_ID';
$client_secret = 'YOUR_CLIENT_SECRET';

// Request access to the Google Drive API
$client = new Google_Client();
$client->setClientId($client_id);
$client->setClientSecret($client_secret);
$client->addScope(Google_Service_Drive::DRIVE);
$client->setAccessType('offline');

// Get an access token
$access_token = $client->fetchAccessTokenWithAuthCode($auth_code);
$client->setAccessToken($access_token);

// Create a Google Drive service object
$service = new Google_Service_Drive($client);

// Create a new file in Google Drive
$file = new Google_Service_Drive_DriveFile();
$file->setName($file_name);
$file->setDescription('A photo uploaded from my website');
$file->setMimeType('image/jpeg');

$data = file_get_contents($file);

$createdFile = $service->files->create($file, array(
  'data' => $data,
  'mimeType' => 'image/jpeg',
  'uploadType' => 'multipart'
));