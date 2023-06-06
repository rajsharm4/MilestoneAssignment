let dishesonTable;
let persons;
let PreviousDish;
let dishArray = [];
let dishpriceArray = [];
const rupeeSymbol = "\u20B9";

document.querySelector("#dishesOnTable").addEventListener("input", (e) => {
  dishesonTable = e.target.value;
});

document.querySelector("#dishButton").addEventListener("click", () => {
  document.querySelector("#total-bill").innerHTML = "";
  document.querySelector("#bill-per-person").innerHTML = "";

  document.querySelector("#persons").value = null;
  persons = null;

  if (dishesonTable === undefined) {
    alert("please enter number of dishes ordered by customer");
    return undefined;
  }

  if (!PreviousDish) {
    for (let i = 0; PreviousDish > i; i++) {
      dishArray[i].remove();
    }
  }

  document.querySelector("#input-screen-2").style.display = "flex";
  for (let i = 0; dishesonTable > i; i++) {
    dishArray[i] = document.createElement("div");
    dishArray[i].idName = `dish-${i}`;
    dishArray[i].classList.add("dish");

    document.querySelector("#input-2-body").appendChild(dishArray[i]);

    dishArray[i].label = document.createElement("label");
    dishArray[i].label.setAttribute("for", `price-dish-${i + 1}`);
    dishArray[i].label.textContent = `Dish-${i + 1} : `;
    dishArray[i].appendChild(dishArray[i].label);

    dishArray[i].input = document.createElement("input");
    dishArray[i].input.setAttribute("type", "number");
    dishArray[i].input.idName = `Price-dish-${i + 1}`;
    dishArray[i].appendChild(dishArray[i].input);

    dishArray[i].input.addEventListener("input", (e) => {
      dishpriceArray[i] = e.target.value;
    });
  }
  PreviousDish = dishesonTable;
});

document.querySelector("#input-2-button").addEventListener("click", () => {
  for (let i = 0; dishesonTable > i; i++) {
    if (dishpriceArray[i] == undefined || dishpriceArray[i] == "") {
      alert(
        `Please fill all the input box of "Enter different-different dishes price "`
      );
      return undefined;
    }
  }
  document.querySelector("#input-screen-3").style.display = "flex";
});

document.querySelector("#persons").addEventListener("input", (e) => {
  persons = e.target.value;
});

document.querySelector("#persons-btn").addEventListener("click", () => {
  if (persons == undefined) {
    alert(
      `Please fill the input field of "Enter total no. of people sharing dishes`
    );
    return undefined;
  }

  let TotalBill = dishpriceArray.reduce((ac, currentVal) => {
    return Number(ac) + Number(currentVal);
  });

  document.querySelector(
    "#total-bill"
  ).innerHTML = `Total bill : <span>${TotalBill.toFixed(
    2
  )}${rupeeSymbol}</span>`;

  document.querySelector(
    "#bill-per-person"
  ).innerHTML = `Bill to be paid by each person in group : <span>${(
    TotalBill / Number(persons)
  ).toFixed(2)}${rupeeSymbol}</span>`;
});
