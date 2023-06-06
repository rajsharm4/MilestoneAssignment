const input = document.getElementById("form");
const container = document.getElementById("container");

input.addEventListener(`submit`, function (start) {
  start.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
      break;
  }
  container.textContent = result;
  container.style.fontSize = "35px";
  container.style.color = "rgb(222, 183, 11)";
});
