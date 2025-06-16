import { products } from "./data.js";
import { renderProducts } from "./renderProducts.js";
import "./searchInput.js";

const html = document.documentElement;
const themeTogler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");

if (theme) {
  html.dataset.theme = theme;
  themeTogler.checked = html.dataset.theme == "dark" ? true : false;
}
themeTogler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dark" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeTogler.checked = html.dataset.theme == "dark" ? true : false;
});

renderProducts(products);

const selecting = document.getElementById("selecting");

selecting.addEventListener("change", (e) => {
  const priceLevel =
    e.target.options[e.target.selectedIndex].getAttribute("data-price");
  const productsToSort = [...products];

  if (priceLevel == "high") {
    const newSorted = productsToSort.sort((a, b) => {
      return b.price - a.price;
    });
    renderProducts(newSorted);
  } else if (priceLevel == "low") {
    const newSorted = productsToSort.sort((a, b) => {
      return a.price - b.price;
    });
    renderProducts(newSorted);
  }
});
