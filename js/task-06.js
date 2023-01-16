const symbolInput = document.getElementById("validation-input");

const requiredLength = symbolInput.getAttribute("data-length");

symbolInput.addEventListener("blur", symbolCounter);

function symbolCounter() {
  symbolInput.value.length <= requiredLength
    ? (symbolInput.classList.add("invalid"),
      symbolInput.classList.remove("valid"))
    : (symbolInput.classList.add("valid"),
      symbolInput.classList.remove("invalid"));
}
