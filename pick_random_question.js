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
  let alreadyUsedQuestions = [];
  if (!window.location.search) {
    questionNumber = Math.floor(Math.random() * questions.length);
  } else {
    let questionRandom = Math.floor(Math.random() * questions.length);
    url.searchParams.get(`q${questionRandom}`) !== `${questionRandom}`
      ? (questionNumber = questionRandom)
      : pickRandomQuestion(questions);
    alreadyUsedQuestions.push(questionRandom);
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
