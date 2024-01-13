import createLayout from "./create_layout.js";
import { letters } from "./constants.js";
import { commonCSSClassPrefix } from "./constants.js";
import { usedLetters } from "./constants.js";
import questions from "./questions.js";
import { answerElements } from "./answer.js";
import { yepAnim } from "./yep_anim.js";

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
  });
}
keyboardLetters();

const answer = questions[0].answer;
const answerArray = questions[0].answer.toUpperCase().split("");

function checkLetter(item, i) {
  if (item instanceof HTMLElement) {
    item.onclick = function (event) {
      console.log(event.currentTarget.textContent);
      let letterTarget = event.currentTarget.textContent;
      console.log(letters.at(i));
      item.setAttribute("disabled", true);
      usedLetters.push(letters.at(i));
      localStorage.setItem("letter", letters.at(i));
      setKeyBackground(letters.at(i), item);
      updateQueryString(letters.at(i));
      console.log(usedLetters);
      console.log(letterTarget);

      checkAnswerLetter(letterTarget, answerArray, answerElements);
    };
  }
}

let yep = false;

function runYepAnim(flag) {
  if (flag === true) {
    yepAnim(true);
  } else {
    yepAnim(false);
  }
}

export function checkAnswerLetter(letter, word, elements) {
  // let letterTarget = usedLetters.pop();
  // let localLetter = localStorage.getItem("letter");
  console.log(letter, word, elements);
  if (word.includes(letter) === true) {
    yep = true;
    runYepAnim(yep);
    console.log(yep);
    console.log("black");
    elements.filter(
      (item) => item.textContent === letter && (item.style.color = "black")
    );
  } else {
    yep = false;
    runYepAnim(yep);
    console.log("white");
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

function updateQueryString(value) {
  const url = new URL(window.location);
  url.searchParams.set("key", value);
  window.history.pushState("", "", url.toString());
}

function setKeyBackground(keyValue, element) {
  if (usedLetters.includes(keyValue) === true) {
    element.style.backgroundColor = "snow";
  }
}

document.addEventListener("keydown", function (event) {
  console.log(event.key.toUpperCase());
  usedLetters.push(event.key.toUpperCase());
  updateQueryString(event.key.toUpperCase());
  console.log(usedLetters);
});

export default keyboard;
