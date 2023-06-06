const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const days = document.getElementById("days").value;
  const totalCost = document.getElementById("totalCost");
  const tc = days * 4000;
  totalCost.innerText = `TotalCost : ${tc}`;
  totalCost.style.color = "rgb(253, 19, 171)";
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  const days2 = document.querySelector(".d2").value;
  const totalCost2 = document.querySelector(".tc");
  const tc2 = days2 * 10000;
  totalCost2.innerText = `TotalCost : ${tc2}`;
  totalCost2.style.color = "rgb(253, 19, 171)";
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  const days3 = document.querySelector(".d3").value;
  const totalCost3 = document.querySelector(".tc3");
  const tc3 = days3 * 20000;
  totalCost3.innerText = `TotalCost : ${tc3}`;
  totalCost3.style.color = "rgb(253, 19, 171)";
});
