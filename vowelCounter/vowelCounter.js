function countVowels() {
  const username = document.getElementById("username").value;
  const container = document.getElementById("container");

  const count = username.match(/[aeiou]/gi).length;

  container.textContent = count;
  container.style.color = "red";
  container.style.fontSize = "34px";
}
