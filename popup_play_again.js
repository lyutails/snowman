import createLayout from "./create_layout.js";
import appendChildren from "./multiple_appendchild.js";

const popupPlayAgain = createLayout({
  elementname: "popupPlayAgain",
  classname: "popup_play_again",
  tag: "div",
});

export const popupText = createLayout({
  elementname: "popupPlayAgain",
  classname: "popup_text",
  tag: "div",
  appendto: popupPlayAgain,
});

const popupRestartButton = createLayout({
  elementname: "popupPlayAgain",
  classname: "popup_button",
  tag: "div",
  textcontent: "play again",
  appendto: popupPlayAgain,
});

export const crossClosePopup = createLayout({
  elementname: "crossClosePopup",
  classname: "popup_cross",
  tag: "div",
  appendto: popupPlayAgain,
});

const mulledWine = createLayout({
  elementname: "mulledWine",
  classname: "mulled_wine",
  tag: "div",
  appendto: popupPlayAgain,
});

const overlay = createLayout({
  elementname: "overlay",
  classname: "overlay",
  tag: "div",
});

export function callPlayAgainModal() {
  appendChildren({
    elementAppendChildrenTo: document.body,
    children: [popupPlayAgain, overlay],
  });
}

function closePopup(element) {
  element.addEventListener("click", () => {
    overlay.style.display = "none";
    popupPlayAgain.style.display = "none";
  });
}

closePopup(popupPlayAgain);
closePopup(overlay);
