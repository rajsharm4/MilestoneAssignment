const addTocart = document.querySelectorAll(`.purchase`);

const emptyTrolly = document.getElementById("blankContainer");

const selectedImages = [];

addTocart.forEach((button) => {
  button.addEventListener("click", () => {
    const productItem = button.parentElement;
    const productImage = productItem.querySelector("img");

    if (selectedImages.some((img) => img.src === productImage.src)) {
      alert("you have already selected this product");
      return;
    }
    const clonedImage = productImage.cloneNode();
    emptyTrolly.appendChild(clonedImage);
    selectedImages.push(clonedImage);
  });
});
