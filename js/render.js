// import { products } from "./products.js";

// const template = document.querySelector("template");
// const selectedProductsList = document.getElementById("selected-products-list");
// let buyBtns = document.querySelectorAll(".buy__btn");
// const warningWrapper = document.querySelector("#warning-wrapper");
// const [title, image, price, amount, totalPrice] = products;

// buyBtns.forEach((buyBtn) => {
//   let clone = template.content.cloneNode(true);

//   const selectedCardTitle = clone.querySelector(".selected__card__title"),
//     selectedCardAmount = clone.querySelector("#amount"),
//     selectedCardPrice = clone.querySelector("#price"),
//     selectedCardTotalPrice = clone.querySelector("#totalPrice");

//   buyBtn.addEventListener("click", () => {
//     selectedProductsList.classList.remove("hidden");
//     warningWrapper.classList.add("hidden");
//     selectedCardTitle.textContent =
//       buyBtn.parentElement.parentElement.title.textContent;
//   });
// });

// const template = document.querySelector("template");
// const selectedProductsList = document.getElementById("selected-products-list");
// const buyBtns = document.querySelectorAll(".buy__btn");
// const warningWrapper = document.getElementById("warning-wrapper");

// buyBtns.forEach((buyBtn) => {
//   buyBtn.addEventListener("click", () => {
//     const card = buyBtn.closest(".card") || buyBtn.parentElement;
//     const title = card.querySelector(".title").textContent;
//     const price = card.querySelector(".price").textContent;

//     // Template klon qilish
//     const clone = template.content.cloneNode(true);

//     const selectedCardTitle = clone.querySelector(".selected__card__title"),
//       selectedCardAmount = clone.querySelector("#amount"),
//       selectedCardPrice = clone.querySelector("#price"),
//       selectedCardTotalPrice = clone.querySelector("#totalPrice");

//     selectedCardTitle.textContent = title;
//     selectedCardAmount.textContent = "1";
//     selectedCardPrice.textContent = price;
//     selectedCardTotalPrice.textContent = price;

//     selectedProductsList.appendChild(clone);
//     selectedProductsList.classList.remove("hidden");
//     warningWrapper.classList.add("hidden");
//   });
// });

const template = document.querySelector("template");
const selectedProductsList = document.getElementById("selected-products-list");
const buyBtns = document.querySelectorAll(".buy__btn");
const warningWrapper = document.getElementById("warning-wrapper");
buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", () => {
    selectedProductsList.classList.remove("hidden");
    warningWrapper.classList.add("hidden");

    const card = buyBtn.parentElement;

    const title = card.querySelector(".title").textContent;
    const price = card.querySelector(".price").textContent;
    const removeBtn = clone.querySelector("#remove__btn");

    const clone = template.content.cloneNode(true);
    const selectedCardTitle = clone.querySelector(".selected__card__title");
    const selectedCardPrice = clone.querySelector("#price");

    selectedCardTitle.textContent = title;
    selectedCardPrice.textContent = price;
    let counter = 0;
    counter++;
    const amount = clone.getElementById("amount");
    amount.textContent = counter;
    console.log(counter);

    selectedProductsList.appendChild(clone);
  });
});
