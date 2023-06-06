const form = document.querySelector("#form");
const container = document.querySelector("#container");

form.addEventListener("submit", function (event) {
   event.preventDefault();
   
  //    connnnnst marks = [
  //     parseFloat(document.querySelector('#number1').value),
  //     parseFloat(document.querySelector('#number2').value),
  //     parseFloat(document.querySelector('#number3').value),
  //     parseFloat(document.querySelector('#number4').value),
  //     parseFloat(document.querySelector('#number5').value)

  //    ];

  //    2 way of writing arrar
  const marks = [];
  for (let i = 1; i <= 5; i++) {
    const mark = parseFloat(document.querySelector(`#number${i}`).value);
    marks.push(mark);
  }

  const highestMarks = Math.max(...marks);

  const studentIndex = marks.findIndex((marks) => marks === highestMarks) + 1;
  const studentName = `Student ${studentIndex}`;

  const result = isNaN(highestMarks)
    ? "Please enter valid marks for all students"
    : `${studentName} scored the highest marks: ${highestMarks}`;

  container.innerText = result;
  container.style.color = "orange";
  container.style.fontSize = "27px";
});
