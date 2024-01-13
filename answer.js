import questions from "./questions.js";
import checkIfAnswerContainsPressedLettter from "./check_answer_letter.js";
import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";

const word = createLayout({
  tag: "div",
  classname: `${commonCSSClassPrefix}_word`,
  elementname: "word",
});

const answerArray = questions[0].answer.toUpperCase().split("");
const answer = questions[0].answer;
localStorage.setItem("answer", answer);

export let answerElements = [];

answerArray.forEach((letter, i) => {
  letter = document.createElement("div");
  letter.classList.add("snowman_answer_letter");
  letter.textContent = answerArray.at(i);
  letter.style.color = "transparent";
  const content = answerArray.at(i);
  checkIfAnswerContainsPressedLettter(answerArray, letter);
  console.log(content, letter);
  word.appendChild(letter);
  answerElements.push(letter);
});

answerElements;

// getAnswerElements(answerElements);

export default word;
