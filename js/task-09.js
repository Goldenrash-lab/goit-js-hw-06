function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");

btnElem.addEventListener("click", onBtnElemClick);

function onBtnElemClick(event) {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  btnElem.previousElementSibling.firstElementChild.textContent = randColor;
}
