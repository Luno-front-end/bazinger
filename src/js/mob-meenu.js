const navEl = document.querySelector(".list-container");
const btnEl = document.querySelector(".wrapper-burger");
const listEl = document.querySelector(".list-nav");
const burgerEl = document.querySelector(".burger");

const onMenu = (e) => {
  e.preventDefault();

  navEl.classList.toggle("active-mob-menu");
  burgerEl.classList.toggle("close");
};

btnEl.addEventListener("click", onMenu);
