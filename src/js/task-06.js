const inpt = document.querySelector("#validation-input");
inpt.addEventListener("blur", (event) => {
  const { value, dataset } = event.target;
  if (value.length === Number(dataset.length)) {
    inpt.classList.add("valid");
    inpt.classList.remove("invalid");
  } else if (value.length === 0) {
    inpt.classList.remove("valid");
    inpt.classList.remove("invalid");
  } else {
    inpt.classList.add("invalid");
    inpt.classList.remove("valid");
  }
});
