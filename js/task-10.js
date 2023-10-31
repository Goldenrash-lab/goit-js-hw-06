function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const placeForDivs = document.querySelector("#boxes");
const addBtnElem = document.querySelector("[data-create]");
const delBtnElem = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 0; i <= amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.width = `${(divWidth += 10)}px`;
    divElem.style.height = `${(divHeight += 10)}px`;
    divElem.style.backgroundColor = `${getRandomHexColor()}`;
    placeForDivs.append(divElem);
  }
}
function destroyBoxes() {}

function onAddBtnElemClick(event) {
  const numberInput = +addBtnElem.previousElementSibling.value;
  createBoxes(numberInput);
}
function onDelBtnElemClick(event) {
  addBtnElem.previousElementSibling.value = 0;
  placeForDivs.innerHTML = "";
}

delBtnElem.addEventListener("click", onDelBtnElemClick);
addBtnElem.addEventListener("click", onAddBtnElemClick);
