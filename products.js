let numbers = Array(10)
  .fill()
  .map((_, i) => i + 1);

let imageParent = document.querySelector(".content-1-products");

for (let img of numbers) {
  let image = document.createElement("img");
  image.src = `https://robohash.org/${img}?set=set2&size=240x240`;
  imageParent.appendChild(image);
}

for (let img of numbers) {
  let image = document.createElement("img");
  image.src = `https://robohash.org/${img}?set=set2&size=240x240`;
  imageParent.appendChild(image);
}
