const categories = document.getElementById("categories");

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categoriesCounter = categories.childElementCount;
console.log(`Number of categories: ${categoriesCounter}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
const headersText = document.querySelectorAll(".item");
for (const headerText of headersText) {
  console.log(headerText.firstElementChild.textContent);
  console.log(headerText.children.textContent);
}
console.log(headersText);
