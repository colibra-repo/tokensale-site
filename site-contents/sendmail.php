<?php

    $to = "marketing@colibra.io"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $country = $_POST['country'];
    $amount = $_POST['amount'];
    $question = $_POST['question'];
    $subject = "Colibra contact form";
    $message = "Name: " . $first_name . " " . $last_name . ".\xA Email:" . $from . ".\xA Country: " . $country . ".\xA Amount: " . $amount . ".\xA Question: "  . $question;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.

?>

