<?php
//$username = $_GET['txtUid'];
//$password = $_GET['txtPwd'];
$uid = $_GET["txtUid"];
$pwd = $_GET["txtPwd"];
if ($uid === "admin" && $pwd === "vvit") {
    echo "Login successful!";
} else {
    echo "Invalid username or password.";
}




?>