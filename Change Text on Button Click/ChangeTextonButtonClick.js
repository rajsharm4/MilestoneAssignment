const head = document.getElementById("head");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (head.innerHTML == "The most affordable learning platform") {
    head.textContent = "PW Skills";
  } else {
    head.textContent = "The most affordable learning platform";
  }
});
