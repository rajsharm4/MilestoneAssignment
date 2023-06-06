function capitalizename() {
  const username = document.getElementById("username").value.trim();
  const container = document.getElementById("container");

  const modifiedName =
    username.charAt(0).toLowerCase() === username.charAt(0)
      ? username.charAt(0).toUpperCase() + username.slice(1)
      : username;

  container.innerText = `your name is: ${modifiedName}`;
  container.style.fontSize = "26px";
  container.style.color = "purple";
  container.style.margin = "10px";
}
