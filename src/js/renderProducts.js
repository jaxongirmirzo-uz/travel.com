import formatNumber from "./formatNumber.js";
import { buyProduct } from "./buyProduct.js";

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");
const counter = document.querySelector(".counter");

export function renderProducts(products) {
  productsList.textContent = "";
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
      cardContainer = clone.querySelector(".card__container"),
      buyBtn = clone.querySelector(".buy__btn"),
      likedBtn = clone.querySelector(".likedBtn");

    cardImage.src = thumbnail;
    cardTitle.textContent = title;
    rating.textContent = "⭐" + _rating;
    description.textContent = _description;
    brand.textContent = "brand :" + _brand;

    buyBtn.addEventListener("click", () => {
      buyProduct({ ...product, amount: 1 });
    });

    counter.textContent = products.length;
    price.textContent = formatNumber(_price);
    const discountPrice = formatNumber(_price, discountPercentage);
    discount.textContent = discountPrice;

    if (!product.brand) {
      brand.remove();
    }

    if (product.rating < 3) {
      rating.style.color = "red";
      likedBtn.className = "";
      likedBtn.classList.add("fa-solid", "fa-thumbs-down", "text-red-700");
    } else if (product.rating > 3 && product.rating < 4) {
      rating.style.color = "yellow";
    } else if (product.rating > 4) {
      rating.style.color = "green";
      likedBtn.className = "";
      likedBtn.classList.add("fa-solid", "fa-thumbs-up", "text-green-700");
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
}
