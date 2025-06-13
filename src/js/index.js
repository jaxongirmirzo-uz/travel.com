import { products } from "./data.js";
import formatNumber from "./formatNumber.js";
import "./searchInput.js";

// const ulEl = document.querySelector("ul");
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const buttonEl = document.querySelector("button");

// let deleteNumber = (e) => {
//   e.parentElement.remove();
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value.length > 0) {
//     const liEl = document.createElement("li");
//     const span = document.createElement("span");
//     const button = document.createElement("button");
//     let random = Math.trunc(Math.random() * 50);
//     let title = form.title.value;

//     button.setAttribute("onclick", `deleteNumber(this)`);
//     button.classList.add("btn", "btn-soft", "btn-error");
//     button.textContent = "delete";

//     button.innerHTML += `<i class="fa-solid fa-trash"></i>`;
//     button.dataset.number = random;
//     span.textContent = title;

//     liEl.appendChild(span);
//     liEl.appendChild(button);
//     ulEl.appendChild(liEl);

//     form.reset();
//   } else {
//     alert("Enter some information");
//   }
// });

// 8dars

const html = document.documentElement;

const themeTogler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");
const header = document.querySelector("header");

if (theme) {
  html.dataset.theme = theme;
  themeTogler.checked = html.dataset.theme == "dark" ? true : false;
}
themeTogler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dark" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeTogler.checked = html.dataset.theme == "dark" ? true : false;
});

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");
const counter = document.querySelector(".counter");

products.forEach((product) => {
  let clone = template.content.cloneNode(true);

  const {
    title,
    description: _description,
    thumbnail,
    price: _price,
    discountPercentage,
    rating: _rating,
    brand: _brand,
  } = product;

  const cardImage = clone.querySelector(".card__image"),
    cardTitle = clone.querySelector(".title"),
    rating = clone.querySelector(".rating"),
    description = clone.querySelector(".description"),
    price = clone.querySelector(".price"),
    discount = clone.querySelector(".discount"),
    brand = clone.querySelector(".brand"),
    cardContainer = clone.querySelector(".card__container");

  cardImage.src = thumbnail;
  cardTitle.textContent = title;
  rating.textContent = "⭐" + _rating;
  description.textContent = _description;
  brand.textContent = "brand :" + _brand;
  const likedBtn = document.createElement("i");
  likedBtn.classList.add("fa-solid", "fa-thumbs-up");

  counter.textContent = products.length;
  price.textContent = formatNumber(_price);
  const discountPrice = formatNumber(_price, discountPercentage);
  discount.textContent = discountPrice;

  if (!product.brand) {
    brand.remove();
  }

  if (product.rating < 3) {
    rating.style.color = "red";
  } else if (product.rating > 3 && product.rating < 4) {
    rating.style.color = "yellow";
  } else if (product.rating > 4) {
    rating.style.color = "green";
  }

  productsList.append(clone);
  cardContainer.addEventListener("mouseover", () => {
    cardImage.classList.add(
      "mt-[10px]",
      "bg-white",
      "px-[20px]",
      "py-[10px]",
      "rounded-[12px]"
    );
  });

  cardContainer.addEventListener("mouseout", () => {
    cardImage.classList.remove(
      "bg-white",
      "px-[20px]",
      "py-[10px]",
      "rounded-[12px]"
    );
  });
});
