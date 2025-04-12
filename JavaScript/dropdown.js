// Variables

const btn = document.querySelector("#dropdown-menu");
const menu = document.querySelector(".menu");

// Eventos

btn.addEventListener("click", () => {
    menu.classList.toggle("visualize");
});