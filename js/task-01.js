const categories = document.getElementById("categories");
const categoriesCounter = categories.childElementCount;
console.log(`Number of categories: ${categoriesCounter}\n`);

const headersText = document.querySelectorAll(".item");
for (const headerText of headersText) {
  console.log(`Category: ${headerText.firstElementChild.textContent}`);

  const subLiElem = headerText.querySelectorAll("ul");
  for (const liElem of subLiElem) {
    console.log(`Elements: ${liElem.childElementCount}\n`);
  }
}
