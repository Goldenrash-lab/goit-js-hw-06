const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListElem = document.querySelector("#ingredients");

function ingredientCreate(ingredient) {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = `${ingredient}`;
  return liElem;
}
function ingredientsCreate(ingredients) {
  return ingredients.map(ingredientCreate);
}

function renderIngredint(ingredients) {
  const ingredientsList = ingredientsCreate(ingredients);
  ingredientsListElem.append(...ingredientsList);
}
renderIngredint(ingredients);
