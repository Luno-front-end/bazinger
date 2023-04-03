const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const wrapperEl = document.querySelector(".wrapper-amount");
const slideAll = document.querySelectorAll(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

slideAll.forEach(() => {
  const createDiv = document.createElement("div");
  createDiv.className = "amount-slides";
  wrapperEl.append(createDiv);
});

const currentSlide = document.querySelectorAll(".amount-slides");

let index = 0;

if (window.outerWidth < 1024) {
  slidesContainer.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  setInterval(() => {
    const slideWidth = slide.clientWidth;

    if (index + 1 < currentSlide.length) {
      index += 1;

      currentSlide.forEach((slides) => {
        slides.classList.remove("active-slide");
      });
      currentSlide[index].classList.add("active-slide");
      slidesContainer.scrollLeft += slideWidth;
    } else {
      index = 0;

      currentSlide.forEach((slides) => {
        slides.classList.remove("active-slide");
      });
      currentSlide[index].classList.add("active-slide");
      slidesContainer.scrollLeft = 0;
    }
  }, 5000);
}

currentSlide[index].classList.add("active-slide");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;

  if (index + 1 < currentSlide.length) {
    index += 1;

    currentSlide.forEach((slides) => {
      slides.classList.remove("active-slide");
    });
    currentSlide[index].classList.add("active-slide");
  }

  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;

  if (index > 0) {
    index -= 1;

    currentSlide.forEach((slides) => {
      slides.classList.remove("active-slide");
    });
    currentSlide[index].classList.add("active-slide");
  }

  slidesContainer.scrollLeft -= slideWidth;
});
