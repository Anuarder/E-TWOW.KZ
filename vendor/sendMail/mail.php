<?php

$to = "@etwow.com.kz";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$subject = "Заявка на звонок с сайта E-TWOW.KZ";
$message = "Имя: $name \nТелефон: $phone";

mail($to, $subject, $message);

?>