function validateForm() {

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("container");

  if (email.match(validRegex) && password.length > 7) {
    message.innerHTML = "Valid email or password";
    message.style.color = "green";
    message.style.fontSize = "32px";
    message.style.textAlign = "center";
    message.style.margin = "1em";
    message.style.fontWeight = "800";
  } else {
    message.innerHTML = "Invalid email or password";
    message.style.color = "red";
    message.style.fontSize = "32px";
    message.style.textAlign = "center";
    message.style.margin = "1em";
    message.style.fontWeight = "500";
  }
}
