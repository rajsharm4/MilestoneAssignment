// Assignment Question
// Q-1 Password Validator

function passwordvalidate() {
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  const message = document.getElementById("message");

  if (password === confirmpassword) {
    message.innerText = "Password Matched. Password validation Successful.";
    message.style.color = "green";
    message.style.fontSize = "20px";
    message.style.padding = "18px";
  } else {
    message.innerText =
      "Password didn't match. Password validation unsuccessful";
    message.style.color = "red";
    message.style.fontSize = "20px";
    message.style.padding = "18px";
  }
}
