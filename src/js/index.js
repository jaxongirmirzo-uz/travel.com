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
