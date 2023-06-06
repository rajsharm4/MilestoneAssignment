let input = document.getElementById("input");
let button = document.getElementById("button");
let task = document.querySelector(".task");

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

button.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newitem = document.createElement("div");
    newitem.classList.add("item");
    newitem.innerHTML = `<p> ${input.value} </p>
        <div class="item-button">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>`;

    task.appendChild(newitem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

task.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

task.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
