const rangeElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

rangeElem.addEventListener("input", onRangeElemChange);

function onRangeElemChange(event) {
  spanElem.style.fontSize = `${event.target.value}px`;
}
