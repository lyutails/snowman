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
    console.log("lalala");
    console.log(+localStorage.getItem("que_lyu"), questionRandom);
    if (
      +localStorage.getItem("que_lyu") !== questionRandom ||
      !localStorage.getItem("que_lyu")
    ) {
      questionNumber = questionRandom;
      console.log("lalala 1");
    }
    if (+localStorage.getItem("que_lyu") === questionRandom) {
      console.log("lalala 3");
      pickRandomQuestion(questions);
    }
  } else {
    let questionRandom = Math.floor(Math.random() * questions.length);
    console.log("lalala 4");
    const url = new URL(window.location);

    console.log(
      url.searchParams.get(`q${questionRandom}`),
      `${questionRandom}`,
      `q${questionRandom}`
    );
    if (url.searchParams.get(`q${questionRandom}`) == null) {
      questionNumber = questionRandom;
      console.log("lalala 5");
    }
    if (url.searchParams.get(`q${questionRandom}`)) {
      pickRandomQuestion(questions);
      console.log("lalala 6");
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
