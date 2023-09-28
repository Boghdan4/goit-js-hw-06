const categoriesEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);
const arrayTitlesCategoriesRef = document.querySelectorAll("h2");
arrayTitlesCategoriesRef.forEach((title) => {
  console.log(title.textContent);
  console.log(title.nextElementSibling.children.length);
});
