const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl
    .getAttribute("style")
    .replace("background-color:", "");
}
