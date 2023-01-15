const form = document.querySelector(".login-form");
const typedEmail = form.elements[0];
const typedPassw = form.elements[1];

const inputData = {
  email: "",
  passw: "",

  setEmail(mail) {
    return (this.email = mail);
  },

  setPassw(passw) {
    return (this.passw = passw);
  },
};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (typedEmail.value === "" || typedPassw.value === "") {
    alert("All fields should be filled!!");
  } else {
    inputData.setEmail(typedEmail.value);
    inputData.setPassw(typedPassw.value);
    form.reset();
    console.log(`email: ${inputData.email}`);
    console.log(`password: ${inputData.passw}`);
  }
}

