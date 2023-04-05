const popupWrapper = document.querySelector(".wrapper-popup");
const popupEl = document.querySelector(".popup");
const btnEl = document.querySelector(".close-popup");

const onClose = () => {
      popupWrapper.classList.remove("popup_active_wrapper");
      popupEl.classList.remove("popup_active");
}

btnEl.addEventListener("click", onClose);


