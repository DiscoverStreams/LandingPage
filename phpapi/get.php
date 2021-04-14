<?php
$host = "itprdcpandb01.cc.ku.edu";
$user = "interact_webuser";
$password = "MB!aS])Baizr";
$dbname = "interact_CyanoHABs";
// $dbname = "127.0.0.1:3306";

// $host = "localhost";
// $user = "root";
// $password = "";
// $dbname = "test";

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
// $request = explode('/', trim($_SERVER['PATH_INFO'], '/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "select * from members";
// $sql = "select * from RealTimeData";


// run SQL statement
$result = mysqli_query($con, $sql);


// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
} else {
  while ($row = mysqli_fetch_assoc($result))
    $test[] = $row;

  echo json_encode($test);
}

header('Content-Type: application/json');

$con->close();
