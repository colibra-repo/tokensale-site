<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email']) && isset($_POST['subscribe']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $fromToEmail = 'youremail@gmail.com'; // Change this email address
    $_SESSION['result'] = 'thankyou';

    ini_set("SMTP", "aspmx.l.google.com");
    ini_set("sendmail_from", $fromToEmail);

    $email = $_POST['email'];
    $message = "New mail was subcribed [".$email."]";

    $headers = "From: ".$fromToEmail;


    mail($fromToEmail, "New subscription", $message, $headers);
    unset($_POST);
    header("Location: ".$_SERVER['HTTP_REFERER']."#formpos");
} else {
    $_SESSION['result'] = 'error';
    $_SESSION['error_msg'] = 'Error msg';
    unset($_POST);
    header("Location: ".$_SERVER['HTTP_REFERER']."#formpos");
}