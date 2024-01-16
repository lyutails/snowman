import createLayout from "./create_layout.js";
import { letters } from "./constants.js";
import { commonCSSClassPrefix } from "./constants.js";
import { usedLetters } from "./constants.js";
import questions from "./questions.js";
import { answerElements } from "./answer.js";
import { yepAnim } from "./yep_anim.js";
import { heartAnim } from "./heart_anim.js";
import { hearts } from "./lives.js";
import { snowmanIncorrectAnswerAnim } from "./snowman_wrong_anim.js";
import { leftGlove, rightGlove } from "./snowman.js";
import { gloveAnim, removeClassOnAnimEnd } from "./glove_anim.js";
import { callPlayAgainModal, popupText } from "./popup_play_again.js";
import questionNumber from "./pick_random_question.js";
import { isRestart } from "./restart.js";

export let keys = [];
export let wrongCounter = 0;
export let correctCounter = 0;

export const resetWrongCounter = () => {
  wrongCounter = 0;
};

export const resetCorrectCounter = () => {
  correctCounter = 0;
};

const keyboardBody = createLayout({
  elementname: "keyboardBody",
  classname: `${commonCSSClassPrefix}_keyboard_body`,
  tag: "div",
});

function keyboardLetters() {
  letters.forEach((item, i) => {
    item = createLayout({
      tag: "button",
      classname: `${commonCSSClassPrefix}_keyboard_letter`,
      textcontent: letters.at(i),
    });
    keyboardBody.appendChild(item);
    checkLetter(item, i);
    keys.push(item);
  });
}
keyboardLetters();

keys;

function checkLetter(item, i) {
  if (item instanceof HTMLElement) {
    item.onclick = function (event) {
      let letterTarget = event.currentTarget.textContent;
      item.setAttribute("disabled", true);
      usedLetters.push(letters.at(i));
      setKeyBackground(letters.at(i), item);
      if (isRestart === false) {
        const answerArray = questions[questionNumber].answer
          .toUpperCase()
          .split("");
        const answer = questions[questionNumber].answer;
        checkAnswerLetter(letterTarget, answerArray, answerElements);
      }
      console.log(isRestart);
      if (isRestart === true) {
        const answerArray = questions[localStorage.getItem("que")].answer
          .toUpperCase()
          .split("");
        const answer = questions[localStorage.getItem("que")].answer;
        checkAnswerLetter(letterTarget, answerArray, answerElements);
        console.log(letterTarget, answerArray, answerElements)
      }
    };
  }
}

let yep = false;

function runYepAnim(flag, letter) {
  if (flag === true) {
    yepAnim(true, letter);
  } else {
    yepAnim(false, letter);
  }
}

export function checkAnswerLetter(letter, word, elements) {
  // let letterTarget = usedLetters.pop();
  if (word.includes(letter) === true) {
    yep = true;
    runYepAnim(yep, letter);
    elements.filter((item) => {
      item.textContent === letter &&
        (item.style.color = "black") &&
        correctCounter++;
    });
    gloveAnim(leftGlove);
    removeClassOnAnimEnd(leftGlove);
    gloveAnim(rightGlove);
    removeClassOnAnimEnd(rightGlove);
    if (isRestart === false) {
      const answerArray = questions[questionNumber].answer
        .toUpperCase()
        .split("");
      const answer = questions[questionNumber].answer;
      correctCounter === answerArray.length && callPlayAgainModal();
      popupText.textContent = `you win \\o/ the found answer is ${answer}`;
      console.log(correctCounter);
    }
    if (isRestart === true) {
        console.log(isRestart)
      const answerArray = questions[localStorage.getItem("que")].answer
        .toUpperCase()
        .split("");
      const answer = questions[localStorage.getItem("que")].answer;
      console.log(correctCounter);
      correctCounter === answerArray.length && callPlayAgainModal();
      popupText.textContent = `you win \\o/ the found answer is ${answer}`;
    }
  } else {
    yep = false;
    runYepAnim(yep, letter);
    wrongCounter++;
    heartAnim(hearts, wrongCounter);
    snowmanIncorrectAnswerAnim();
    wrongCounter === 6 && callPlayAgainModal();
    wrongCounter === 6 &&
      (popupText.textContent = "not this time, but you can");
  }
}

const keyboardWrapper = createLayout({
  elementname: "keyboardWrapper",
  classname: `${commonCSSClassPrefix}_keyboard_wrapper`,
  tag: "div",
  appendchild: keyboardBody,
});

const keyboard = createLayout({
  elementname: "keyboard",
  classname: `${commonCSSClassPrefix}_keyboard`,
  tag: "div",
  appendchild: keyboardWrapper,
});

function setKeyBackground(keyValue, element) {
  if (usedLetters.includes(keyValue) === true) {
    element.style.backgroundColor = "snow";
  }
}

document.addEventListener("keydown", function (event) {
  usedLetters.push(event.key.toUpperCase());
});

export default keyboard;
