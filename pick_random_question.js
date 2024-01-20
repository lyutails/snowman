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
    let questionRandom = Math.floor(Math.random() * questions.length);
    if (
      +localStorage.getItem("que_lyu") !== questionRandom ||
      !localStorage.getItem("que_lyu")
    ) {
      questionNumber = questionRandom;
    }
    if (+localStorage.getItem("que_lyu") === questionRandom) {
      pickRandomQuestion(questions);
    }
  } else {
    let questionRandom = Math.floor(Math.random() * questions.length);
    const url = new URL(window.location);
    if (url.searchParams.get(`q${questionRandom}`) == null) {
      questionNumber = questionRandom;
    }
    if (url.searchParams.get(`q${questionRandom}`)) {
      pickRandomQuestion(questions);
    }
  }
}

export function checkAnswerNumber(questions) {
  pickRandomQuestion(questions);
  question.textContent = questions[questionNumber].question;
  updateQueryString(questionNumber);
  localStorage.setItem("que_lyu", questionNumber);
}

checkAnswerNumber(questions);

export default questionNumber;
