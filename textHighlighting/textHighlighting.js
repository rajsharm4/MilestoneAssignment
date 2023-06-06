const paragraph = document.getElementById("paragraph");

function search() {
  let textToSearch = document.getElementById("input").value;

  if (textToSearch !== "") {
    let regExp = new RegExp(textToSearch, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(
      regExp,
      `<mark>$&</mark>`
    );
  }
}
