const nameCategories = document.querySelectorAll("#categories h2");

function takeNameCat(categories) {
  console.log(`Number of categories: ${categories.length}`);
  categories.forEach((elem) => {
    console.log(`Category: ${elem.textContent}`);
    console.log(`Elements:${elem.nextElementSibling.children.length}`);
  });
}

console.log(takeNameCat(nameCategories));
