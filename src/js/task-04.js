let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

const spn = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spn.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  spn.textContent = counterValue;
});
