const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
});
