const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", () => {
  if (textInput.value !== "") {
    textOutput.textContent = textInput.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
