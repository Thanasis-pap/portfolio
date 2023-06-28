// This function validates the contact form fields.
// In order  to send the form to an e-mail, we use the https://formspree.io forms webpage.
// That's because GitHub Pages does not support server-side code, nor can we store the 
// reciever's email data privately.

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

/* Animations */

function fadeIn() {
  var reveals = document.querySelectorAll(".fadeIn");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function fadeInUp() {
  var reveals = document.querySelectorAll(".fadeInUp");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("load", fadeIn);
window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", fadeInUp);