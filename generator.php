<?php
$servername = "localhost";
$username = "root";
$password = "Bghujknmol123";
$dbname = "posts_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, title, link, content FROM posts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $template = file_get_contents('template/index.html');

    while ($row = $result->fetch_assoc()) {
        $folderName = $row['link'];
        $fileName = "index.html";

        // Создание папки для статьи
        if (!file_exists($folderName)) {
            mkdir($folderName, 0777, true);
        }

        $htmlContent = str_replace(
            ['{{title}}', '{{content}}'],
            [$row['title'], $row['content']],
            $template
        );

        file_put_contents("$folderName/$fileName", $htmlContent);
    }
    echo "Articles generated successfully!";
} else {
    echo "No articles found in the database.";
}

$conn->close();
?>