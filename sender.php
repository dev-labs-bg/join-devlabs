<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

    $email_to = "hello@devlabs.bg, goran@devlabs.bg, superkalo@devlabs.bg";
    $email_subject = "Съобщение през контактната форма на DevLabs.bg";

    extract($_POST);
    
$email_message = <<<EOT
Съобщение, изпратено през контактната форма на DevLabs.bg

Име: $first_name
Фамилия: $last_name
Телефон: $phone
E-mail: $email

Съобщение: $message
EOT;

    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);
}