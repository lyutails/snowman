import question from "./question.js";
import questions from "./questions.js";

let questionNumber = 0;
const url = new URL(window.location);
console.log(window.location.search);

function updateQueryString(value) {
  const url = new URL(window.location);
  url.searchParams.set(`q${value}`, value);
  window.history.pushState("", "", url.toString());
}

export function pickRandomQuestion(questions) {
  if (!window.location.search) {
    questionNumber = Math.floor(Math.random() * questions.length);
  } else {
    questionNumber = Math.floor(Math.random() * questions.length);
    url.searchParams.get(`q${questionNumber}`) === `${questionNumber}` ?
      (questionNumber = Math.floor(Math.random() * questions.length)) : questionNumber;
  }
  console.log(questionNumber);
}

function checkAnswerNumber(questions) {
  pickRandomQuestion(questions);
  question.textContent = questions[questionNumber].question;
  updateQueryString(questionNumber);
}

checkAnswerNumber(questions);

export default questionNumber;
