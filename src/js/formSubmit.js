import axios from "axios";

const formEl = document.querySelector(".contact-form");

const popupWrapper = document.querySelector(".wrapper-popup");
const popupEl = document.querySelector(".popup");
const alertFormEl = document.querySelector(".alert-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = formEl.querySelector('[name="name"]');
  const email = formEl.querySelector('[name="email"]');
  const subject = formEl.querySelector('[name="subject"]');
  const message = formEl.querySelector('[name="message"]');

  if (
    name.value.length < 3 ||
    subject.value.length < 5 ||
    email.value.length < 1 ||
    message.value.length < 10
  ) {
    alertFormEl.classList.add("alert-form-active");
    return;
  }
  alertFormEl.classList.remove("alert-form-active");

  const body = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  axios.post("https://bazinger-backend.onrender.com/feetback", body);

  popupWrapper.classList.add("popup_active_wrapper");
  popupEl.classList.add("popup_active");

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";

  console.log(body);
});
