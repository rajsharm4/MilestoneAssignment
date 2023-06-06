const input = document.getElementById("input");
const button = document.getElementById("button");
const container = document.getElementById("container");

let storeInput;

input.addEventListener("input", (e) => {
  storeInput = Number(e.target.value);
});

button.addEventListener("click", () => {
  container.innerHTML = "";

  for (let row = storeInput; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      container.innerHTML += "*";
    }
    container.innerHTML += "<br>";
  }
});
