
<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mailTo = 'codyswick1988@gmail.com'
  $headers = "From: ".$mailFrom;
  $txt = "You have recived an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers, $phone);
  header("Location:index.html?mailsend");
}

 ?>
