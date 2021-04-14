<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "";

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "select * from Parameters";


// run SQL statement
$result = mysqli_query($con, $sql);


// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
} else {
  echo json_encode($result);
}

header('Content-Type: application/json');

$con->close();
