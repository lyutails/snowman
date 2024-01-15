import question from "./question.js";
import questions from "./questions.js";

let questionNumber = 0;

function updateQueryString(value) {
  const url = new URL(window.location);
  url.searchParams.set(`q${value}`, value);
  window.history.pushState("", "", url.toString());
}

export function pickRandomQuestion(questions) {
  questionNumber = Math.floor(Math.random() * questions.length);
  console.log(questionNumber);
}

function checkAnswerNumber(questions) {
  const url = new URL(window.location);
  questions.find((item) => {
    if (url.searchParams.get(`q${item.id}`) === `${item.id}`) {
      console.log(questions[item.id].id, url.searchParams.get(`${item.id}`));
      pickRandomQuestion(questions);
    }
    if (
      url.searchParams.get(`q${item.id}`) === `${item.id}` ||
      url.searchParams.get(`q${item.id}`) === null
    ) {
      pickRandomQuestion(questions);
      question.textContent = questions[questionNumber].question;
      updateQueryString(questionNumber);
    }
  });
}

checkAnswerNumber(questions);

export default questionNumber;
