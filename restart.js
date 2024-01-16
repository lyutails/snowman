import { createAnswer } from "./answer.js";
import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";
import { repairHeart } from "./heart_anim.js";
import {
  keys,
  resetCorrectCounter,
  resetWrongCounter,
} from "./keyboard.js";
import { hearts } from "./lives.js";
import { checkAnswerNumber } from "./pick_random_question.js";
import questions from "./questions.js";
import { returnClothes } from "./return_clothes.js";

export let isRestart = false;

export const restart = () => {
  isRestart = true;
};

const restartButton = createLayout({
  elementname: "restartButton",
  classname: `${commonCSSClassPrefix}_restart`,
  tag: "button",
  textcontent: "restart",
});

restartButton.addEventListener("click", () => {
  isRestart = true;
  resetCorrectCounter();
  resetWrongCounter();
  window.history.pushState({}, "", window.location.pathname);
  keys.forEach((key) => {
    key.removeAttribute("disabled");
    key.style.backgroundColor = "lightgreen";
  });
  checkAnswerNumber(questions);
  createAnswer(localStorage.getItem("que_lyu"));
  repairHeart(hearts);
  returnClothes();
});

export default restartButton;
