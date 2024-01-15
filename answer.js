import questions from "./questions.js";
import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";
import questionNumber from "./pick_random_question.js";

const word = createLayout({
  tag: "div",
  classname: `${commonCSSClassPrefix}_word`,
  elementname: "word",
});

console.log(questionNumber);
const answerArray = questions[questionNumber].answer.toUpperCase().split("");
const answer = questions[questionNumber].answer;
console.log(answer);

export let answerElements = [];

answerArray.forEach((letter, i) => {
  letter = document.createElement("div");
  letter.classList.add("snowman_answer_letter");
  letter.textContent = answerArray.at(i);
  letter.style.color = "transparent";
  const content = answerArray.at(i);
  word.appendChild(letter);
  answerElements.push(letter);
});

answerElements;

export default word;
