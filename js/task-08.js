const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormElemSubmit);

function onFormElemSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log({ email, password });
  }
}
