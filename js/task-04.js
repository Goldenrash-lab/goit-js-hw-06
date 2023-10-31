const valueElem = document.querySelector("#value");
const decrElem = document.querySelector("[data-action=decrement]");
const incElem = document.querySelector("[data-action=increment]");

let counterValue = 0;
function onDecrElemClick(event) {
  counterValue--;
  valueElem.textContent = counterValue;
}
function onIncElemClick(event) {
  counterValue++;
  valueElem.textContent = counterValue;
}

decrElem.addEventListener("click", onDecrElemClick);
incElem.addEventListener("click", onIncElemClick);
