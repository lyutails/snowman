import createLayout from "./create_layout.js";
import appendChildren from "./multiple_appendchild.js";
import { checkAnswerNumber } from "./pick_random_question.js";
import questions from "./questions.js";
import { keys, resetCorrectCounter, resetWrongCounter } from "./keyboard.js";
import { isRestart, restart } from "./restart.js";
import { createAnswer } from "./answer.js";
import { repairHeart } from "./heart_anim.js";
import { returnClothes } from "./return_clothes.js";
import { hearts } from "./lives.js";
import { yepAnim } from "./yep_anim.js";

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
  overlay.style.visibility = "visible";
  popupPlayAgain.style.visibility = "visible";
}

function closePopup(element) {
  element.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    popupPlayAgain.style.visibility = "hidden";
  });
}

closePopup(crossClosePopup);
closePopup(overlay);

popupRestartButton.addEventListener("click", () => {
  restart();
  resetCorrectCounter();
  resetWrongCounter();
  checkIfAllQuestionsUsed();
  keys.forEach((key) => {
    key.removeAttribute("disabled");
    key.style.backgroundColor = "lightgreen";
  });
  checkAnswerNumber(questions);
  createAnswer(localStorage.getItem("que_lyu"));
  repairHeart(hearts);
  returnClothes();
  overlay.style.visibility = "hidden";
  popupPlayAgain.style.visibility = "hidden";
  yepAnim(false, "");
});

export function checkIfAllQuestionsUsed() {
  let usedQuestions = [];
  const url = new URL(window.location);
  if (window.location.search) {
    for (let i = 0; i < questions.length; i++) {
      url.searchParams.get(`q${i}`) === `${i}` && usedQuestions.push(i);
      usedQuestions.length === 12 && window.history.pushState({}, "", window.location.pathname);
      usedQuestions.length === 12 && (usedQuestions = []);
    }
  }
}
checkIfAllQuestionsUsed();
