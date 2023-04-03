const linkEl = document.querySelectorAll('a[href*="#"]');
const navEl = document.querySelector(".list-container");
const burgerEl = document.querySelector(".burger");

const scrollToSection = (e, link) => {
  e.preventDefault();
  const attribute = link.getAttribute("href");
  console.log(attribute);

  if (attribute === "#") {
    return;
  }

  console.log();

  linkEl.forEach((linkClass) => {
    linkClass.classList.remove("active");
    if (navEl.classList[1] === "active-mob-menu") {
      navEl.classList.remove("active-mob-menu");
      burgerEl.classList.remove("close");
    }
  });

  link.classList.add("active");

  document.querySelector("" + attribute).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
};

linkEl.forEach((link) => {
  link.addEventListener("click", (e) => scrollToSection(e, link));
});
