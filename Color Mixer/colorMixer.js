const input = document.getElementById("form");
const container = document.getElementById("container");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const containername = document.getElementById("containername");

input.addEventListener(`submit`, function (event) {
  event.preventDefault();

  const firstColor = color1.value.toLowerCase();
  const secondColor = color2.value.toLowerCase();

  let mixedColor;
  switch (firstColor) {
    case "red":
      switch (secondColor) {
        case "blue":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "orange";
          break;
        default:
          mixedColor = "Invalid color combination";
      }
      break;
    case "blue":
      switch (secondColor) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid color combination";
      }
      break;
    case "yellow":
      switch (secondColor) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor = "Invalid color combination";
      }
      break;
    default:
      mixedColor = "Invalid color combination";
  }

  if (mixedColor == "Invalid color combination") {
    container.style.backgroundColor = "white";
  } else {
    container.style.backgroundColor = mixedColor;
  }
  containername.textContent = mixedColor;
  containername.style.backgroundColor = mixedColor;
  containername.style.color = "white";
  container.style.fontWeight = "600";
  container.style.fontSize = "27px";
  container.style.border = "none";
  containername.style.border = "none";
});
