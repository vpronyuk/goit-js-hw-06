let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');
const spanValue = document.getElementById("value");

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
