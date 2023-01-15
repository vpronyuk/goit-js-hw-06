const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = document.querySelector(".gallery");

const gallery = images
  .map((img) => {
    return `<li><img src=${img.url} alt=${img.alt} width = 100% height = 100%></img></li>`;
  })
  .join("");

imagesEl.insertAdjacentHTML("afterbegin", gallery);

const liEl = imagesEl.querySelectorAll("li");
const imgEl = imagesEl.querySelectorAll("img");

imagesEl.style.listStyle = "none";
imagesEl.style.margin = 0;
imagesEl.style.paddingLeft = 0;
imagesEl.style.display = "flex";
imagesEl.style.justifyContent = "center";
imagesEl.style.columnGap = "15px";

Array.from(liEl).map(
  (el) => (
    (el.style.border = "3px dashed tomato"),
    (el.style.padding = "1px"),
    (el.style.width = "calc((100% - 90px) / 3)")
  )
);
Array.from(imgEl).map((el) => (el.style.display = "block"));
