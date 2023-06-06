// generate random number between 1 to 100

const digit = document.getElementById("digit");

function generate() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  digit.textContent = randomNumber;
  digit.style.fontSize = "8rem";
  digit.style.color = "#ff1064";
}
