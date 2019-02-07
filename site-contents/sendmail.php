<?php

/* 
$_POST variables
	- email
	usage: $_POST['variable'];
*/

$to      = $_POST['email']; 
$subject = 'the subject';
$message = file_get_contents('mail_template.html');
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

// return true;

/* 

Changes required in sendmail.ini

Mail Server Configuration - change with your server details

smtp_server=smtp.gmail.com
smtp_port=587
error_logfile=error.log
debug_logfile=debug.log
auth_username=your-gmail-id@gmail.com
auth_password=your-gmail-password
force_sender=your-gmail-id@gmail.com

Changes required in php.ini

SMTP=smtp.gmail.com
smtp_port=587
sendmail_from = your-gmail-id@gmail.com
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"
;sendmail_path = "C:\xampp\mailtodisk\mailtodisk.exe"

*/
?>