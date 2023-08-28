const shoe1 = document.querySelector(".shoe1");
const shoe2 = document.querySelector(".shoe2");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const topCard = document.querySelector(".top-card");
const priceBox = document.querySelector(".price");

color2.addEventListener("click", () => {
  priceBox.classList.add("backgroundChangePrice2");
  topCard.classList.add("backgroundChange2");
  shoe1.classList.add("shoe1-move");
  shoe2.classList.add("shoe2-move");
});

color1.addEventListener("click", () => {
  priceBox.classList.remove("backgroundChangePrice2");
  topCard.classList.remove("backgroundChange2");
  shoe1.classList.remove("shoe1-move");
  shoe2.classList.remove("shoe2-move");
});

document.querySelector(".sizes").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("span")) {
    const target = e.target;
    const siblings = target.closest(".sizes").querySelectorAll(".span");
    siblings.forEach((el) => {
      if (el !== target) el.classList.remove("size-active");
    });
    if (target.classList.contains("size-active")) {
      target.classList.remove("size-active");
    } else {
      target.classList.add("size-active");
    }
  }
});
