function click() {
  let useremail = document.getElementById("user");
  let userpass = document.getElementById("pass");
  if (useremail == "n@gmail.com" && userpass === "123") {
    window.location.href = "Home.html";
  } else {
    document.querySelector(".container").innerHTML =
      "<span style = 'color:red'>Please Enter your valid e-mail and password";
  }
}
