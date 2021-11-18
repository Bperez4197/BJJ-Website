//GET TEST IMAGES FOR STYLING

// let numbers = Array(10)
//   .fill()
//   .map((_, i) => i + 1);

// let imageParent = document.querySelector(".content-1-products");

// for (let img of numbers) {
//   let image = document.createElement("img");
//   image.src = `https://robohash.org/${img}?set=set2&size=240x240`;
//   imageParent.appendChild(image);
// }

// for (let img of numbers) {
//   let image = document.createElement("img");
//   image.src = `https://robohash.org/${img}?set=set2&size=240x240`;
//   imageParent.appendChild(image);
// }

/////////////////////////////////////////////////////////////////////////

const linkKimono = document.querySelector("#kimono-link");
const linkBelt = document.querySelector("#belt-link");
const linkRashguard = document.querySelector("#rashguard-link");
const linkMouthguard = document.querySelector("#mouthguard-link");
const linkViewAll = document.querySelector("#viewall-link");
const kimonoBlock = document.querySelector("#kimono");
const beltBlock = document.querySelector("#belt");
const rgBlock = document.querySelector("#rashguard");
const mgBlock = document.querySelector("#mouthguard");
const smallMenu = document.querySelector("#smallMenu");
const popUpMenu = document.querySelector("#popupMenu");

const blockArr = [kimonoBlock, beltBlock, rgBlock, mgBlock];

const hide = function () {
  for (let block of blockArr) {
    if (this.id.slice(0, this.id.indexOf("-")) == block.id) {
      block.classList.remove("hidden");
    } else {
      block.classList.add("hidden");
    }
  }
};

const unhideAll = function () {
  for (let block of blockArr) {
    block.classList.remove("hidden");
  }
};

const showMenu = function () {
  popUpMenu.classList.toggle("hidden");
};

linkKimono.addEventListener("click", hide);
linkBelt.addEventListener("click", hide);
linkRashguard.addEventListener("click", hide);
linkMouthguard.addEventListener("click", hide);
linkViewAll.addEventListener("click", unhideAll);
smallMenu.addEventListener("click", showMenu);
