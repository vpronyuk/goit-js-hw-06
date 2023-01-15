const spanSizeResult = document.getElementById("text");
const inputRangeValue = document.getElementById("font-size-control");

spanSizeResult.style.fontSize = `${inputRangeValue.value}px`; //start size of text

inputRangeValue.addEventListener("input", () => {
  spanSizeResult.style.fontSize = `${inputRangeValue.value}px`;
});
