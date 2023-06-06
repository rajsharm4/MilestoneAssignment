const input = document.getElementById("input");
const container = document.getElementById("container");

function checkDivisibility() {
  const numberarr = input.value.split(",");
  const divisibleNumber = [];

  for (let i = 0; i < numberarr.length; i++) {
    const result = parseInt(numberarr[i]);
    if (result % 2 === 0) {
      continue;
    }
    if (result % 3 === 0) {
      divisibleNumber.push(result);
    }
  }

  if (divisibleNumber.length > 0) {
    container.innerHTML =
      "Numbers that satisfy the condition:" + divisibleNumber;
    container.style.textAlign = "center";
    container.style.color = "blue";
    container.style.fontSize = "20px";
  } else {
    container.innerHTML = "No numbers satisfy the condition";
    container.style.textAlign = "center";
    container.style.color = "red";
    container.style.fontSize = "20px";
  }
}
