<?php
$companyName = $_POST['companyName'];
$companyUrl = $_POST['companyUrl'];
$companyFirstName = $_POST['companyFirstName'];
$companyLastName = $_POST['companyLastName'];
$companyEmail = $_POST['companyEmail'];
$companyPosition = $_POST['companyPosition'];
$companyPhone = $_POST['companyPhone'];
$companyMsg = $_POST['companyMsg'];
$to = 'sales@jettisystems.com';
$subject = 'Jetti Rewards Information Request';
$message = 'COMPANY: ' . $companyName ."\n" . 'PHONE: ' . $companyPhone . "\n" . 'NAME: ' . $companyFirstName . ' ' . $companyLastName . "\n" . 'POSITION: ' . $companyPosition . "\n" . 'EMAIL: ' . $companyEmail . "\n" . 'PHONE: ' . $companyPhone . "\n" . 'WEB: ' . $companyUrl . "\n" . 'WEB: ' . $companyMsg;
mail ($to, $subject, $message, 'From: ' . $companyName);
header("Location: http://www.jettisystems.com/thank-you.html");
?>