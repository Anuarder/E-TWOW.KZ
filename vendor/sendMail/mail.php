<?php

$to = "example";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$subject = "Заявка на звонок с сайта E-TWOW.KZ от $name";
$message = "Имя: $name <br> Телефон: <a href=\"tel:$phone\">$phone</a>";
$header = "Content-Type: text/html; charset=utf-8"; 
mail($to, $subject, $message, $header);

?>