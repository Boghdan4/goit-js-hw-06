let counterValue = 0;
const ValueNew = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const clickDecrementBtn = (event) => {
  counterValue -= 1;
  ValueNew.textContent = counterValue;
};
const clickIncrementBtn = (event) => {
  counterValue += 1;
  ValueNew.textContent = counterValue;
};
decrementBtn.addEventListener("click", clickDecrementBtn);
incrementBtn.addEventListener("click", clickIncrementBtn);
