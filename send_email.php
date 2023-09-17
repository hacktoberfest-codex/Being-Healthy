<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["w3review"];
    
    $to = "sagarsoumyarath07@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    
    $mailBody = "Name: $name\n";
    $mailBody .= "Email: $email\n\n";
    $mailBody .= "Message:\n$message";
    
    // Send the email
    mail($to, $subject, $mailBody, $headers);
    
    // Redirect back to the form or a thank-you page
    header("Location: contact.html"); // Replace with the appropriate URL
    exit();
}
?>
