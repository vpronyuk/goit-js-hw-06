let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');
const spanValue = document.getElementById("value");

buttonDecrement.addEventListener("click", onDecrementClick);
buttonIncrement.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
