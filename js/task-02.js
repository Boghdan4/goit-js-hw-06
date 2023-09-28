const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsR = document.querySelector("#ingredients");
const itemsR = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent(ingredient);
  item.classList.add("item");
  return item;
});

ingredientsR.prepend(...itemsR);
