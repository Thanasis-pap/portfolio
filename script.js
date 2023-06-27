// This script is to validate the contact form fields.
// In order  to send the form to an e-mail, we use the https://formspree.io webpage.
// This is because we are using GitHub Pages to host our website, 
// and GitHub Pages does not support server-side code, nor can we store the 
// reciever's data privately.

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateForm() {
  var senderName = document.forms["fs-frm"]["full-name"].value;
  var email = document.forms["fs-frm"]["email-address"].value;
  var message = document.forms["fs-frm"]["message"].value;
  var error = "";

  if (senderName == "") {
    error += "Please provide your name.\n";
  }

  if (email == "") {
    error += "Please provide your email address.\n";
  } else if (!validateEmail(email)) {
    error += "Please enter a valid email address.\n";
  }

  if (message == "") {
    error += "Please enter a message.\n";
  }

  if (error != "") {
    alert(error);
    return false;
  }
}

