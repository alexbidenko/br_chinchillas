<?php

$inputJSON = file_get_contents('php://input');
$_POST = json_decode($inputJSON, true);

$headers = "From: br@chinchillas.ru\r\n";

$message =
  "Сообщение от пользователя: ".$_POST['userName']."\n".
  "Email: ".$_POST['userEmail']."\n".
  "Телефон: ".$_POST['userPhone']."\n".
  "Город: ".$_POST['userCity']."\n".
  "Содержание сообщения: ".$_POST['userMessage']."\n";

$response = mail("rada742008@yandex.ru", "Сообщение с сайта br-chinchillas.ru", $message, $headers);
echo json_encode(array("result"=>$response));

?>
