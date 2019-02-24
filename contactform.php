<$php

if(isset($_post['submit'])){
  $name = $_post['name'];
  $subject = $_post['subject'];
  $mailFrom = $_post['mail'];
  $phone = $_post['phone'];
  $message = $_post['message'];

  $mailTo = 'codyswick1988@gmail.com'
  $headers = "From: ".$mailFrom;
  $txt = "You have recived an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers, $phone);
  header("Location:index.html?mailsend");
}
?>
