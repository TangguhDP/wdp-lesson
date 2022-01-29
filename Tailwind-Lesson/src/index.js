const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggle");
const html = document.querySelector("html");

burger.addEventListener("click", (e) => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

toggle.addEventListener("click", () => {
  toggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
