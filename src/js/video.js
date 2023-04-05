const playBtnEl = document.querySelector("#btn-play");
const playerEl = document.querySelector("#myVideo");
const wrapperVideoEl = document.querySelector(".wrapper-video");
const sectionFeatures = document.querySelector(".gallery");
const infoBoxEl = document.querySelector("#info-box");
const videoEl = document.querySelector("#myVideo");
const fullscreenBtnEl = document.querySelector(".fullscreen");

const createAlertText = (text) => {
  const createAlert = document.createElement("div");
  createAlert.className = "alert";
  createAlert.innerHTML = text;

  wrapperVideoEl.append(createAlert);
  setTimeout(() => createAlert.remove(), 4000);
};

const createFullscreenBtn = (text) => {
  if (document.querySelector(".fullscreen")) {
    return;
  }
  const createAlert = document.createElement("button");
  createAlert.type = "button";
  createAlert.className = "fullscreen";
  createAlert.innerHTML = text;

  sectionFeatures.append(createAlert);
};

const playVideo = (e) => {
  e.preventDefault();

  playerEl.muted = false;
  playerEl.controls = true;
  wrapperVideoEl.classList.add("active-video");
  infoBoxEl.classList.add("info-box-disabled");
  videoEl.classList.add("disabled-opacity");

  if (window.outerWidth < 1279) {
    createFullscreenBtn("Expand the video to full screen");
    const fullscreenBtnEl = document.querySelector(".fullscreen");
    videoEl.addEventListener("webkitendfullscreen", () => {
      videoEl.pause();
    });
    fullscreenBtnEl.addEventListener("touchstart", () => {
      videoEl.webkitEnterFullscreen();
      videoEl.play();
    });

    return;
  }
  createAlertText(
    "<strong>Double click to open the video in full screen</strong>"
  );

};

playBtnEl.addEventListener("click", playVideo);
