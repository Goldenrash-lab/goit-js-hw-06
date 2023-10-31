const inputElem = document.querySelector("#name-input");

const nameOutputElem = document.querySelector("#name-output");

function onInputElemChange(event) {
  nameOutputElem.textContent = event.target.value;
  if (nameOutputElem.textContent === "") {
    nameOutputElem.textContent = "Anonymous";
  }
}

inputElem.addEventListener("input", onInputElemChange);
