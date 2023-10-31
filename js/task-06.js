const inputElem = document.querySelector("#validation-input");

function onInputElemChange(event) {
  const minLength = +inputElem.dataset.length;

  if (event.target.value.length > minLength) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
}

function onInputElemFocus(event) {
  event.target.classList.remove("invalid");
  event.target.classList.remove("valid");
}

inputElem.addEventListener("blur", onInputElemChange);
inputElem.addEventListener("focus", onInputElemFocus);
