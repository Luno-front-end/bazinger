const navEl = document.querySelector(".list-container");
const btnEl = document.querySelector(".wrapper-burger");
const listEl = document.querySelector(".list-nav");
const burgerEl = document.querySelector(".burger");

const body = document.querySelector("body");

const onMenu = (e) => {
  e.preventDefault();

  // navEl.classList.toggle("close-mob-menu");
  navEl.classList.toggle("active-mob-menu");
  burgerEl.classList.toggle("close");

  body.classList.toggle("block-scroll");
};

btnEl.addEventListener("click", onMenu);
