<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "Bghujknmol123";
$dbname = "posts_db";

$conn = new mysqli($servername, $username, $password, $dbname, 3306);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, preview_picture, link FROM posts";
$result = $conn->query($sql);

$posts = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
} else {
    echo json_encode(["error" => "No posts found"]);
    exit();
}

header('Content-Type: application/json');
echo json_encode($posts);

$conn->close();
?>