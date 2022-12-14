<?php
 $first_name = $_POST['first_name'];
 $last_name = $_POST['last_name'];
 $gender = $_POST['gender'];
 $email = $_POST['email'];
 $password = $_POST['password'];
 $phone_number = $_POST['phone_number'];

 $conn = new mysqli('localhost','root','','test');

 // Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }else{
    $stmt = $conn->prepare("insert into registration(first_name, last_name, gender, email, password, phone_number)
    values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi",$first_name, $last_name, $gender, $email, $password, $phone_number);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
  }
?>