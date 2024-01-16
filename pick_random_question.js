import question from "./question.js";
import questions from "./questions.js";

let questionNumber = 0;
const url = new URL(window.location);

function updateQueryString(value) {
  const url = new URL(window.location);
  url.searchParams.set(`q${value}`, value);
  window.history.pushState("", "", url.toString());
}

export function pickRandomQuestion(questions) {
  if (!window.location.search) {
    questionNumber = Math.floor(Math.random() * questions.length);
  } else {
    let questionRandom = Math.floor(Math.random() * questions.length);
    url.searchParams.get(`q${questionRandom}`) === `${questionRandom}`
      ? (questionRandom = Math.floor(Math.random() * questions.length))
      : (questionNumber = questionRandom);
  }
}

export function checkAnswerNumber(questions) {
  pickRandomQuestion(questions);
  question.textContent = questions[questionNumber].question;
  updateQueryString(questionNumber);
  localStorage.setItem("que", questionNumber);
}

checkAnswerNumber(questions);

export default questionNumber;
