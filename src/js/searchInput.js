const searchEl = document.getElementById("search");

searchEl.addEventListener("input", () => {
  const titlesContainer = document.querySelectorAll(".title");
  const searchValue = searchEl.value.toLowerCase();
  titlesContainer.forEach((title) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      title.parentElement.parentElement.parentElement.parentElement.style.display =
        "block";
    } else {
      title.parentElement.parentElement.parentElement.parentElement.style.display =
        "none";
    }
  });
});
