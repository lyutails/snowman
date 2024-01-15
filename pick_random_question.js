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
  questionNumber = Math.floor(Math.random() * questions.length);
  if (url.searchParams.get(`q${questionNumber}`) !== null) {
    questionNumber = Math.floor(Math.random() * questions.length);
  }
  console.log(questionNumber);
}

function checkAnswerNumber(questions) {
  if (!window.location.search) {
    pickRandomQuestion(questions);
    question.textContent = questions[questionNumber].question;
    updateQueryString(questionNumber);
  } else {
    pickRandomQuestion(questions);
    question.textContent = questions[questionNumber].question;
    updateQueryString(questionNumber);

    /* for (let i = 0; i < questions.length; i++) {
        if (url.searchParams.get(`q${questions[i].id}`) === null) {
          pickRandomQuestion(questions);
          question.textContent = questions[questionNumber].question;
          updateQueryString(questionNumber);
          console.log(
            questions[i].id,
            url.searchParams.get(`q${questions[i].id}`),
            `${questions[i].id}`
          );
        }
      } */

    /* questions.find((item) => {
        if (url.searchParams.get(`q${item.id}`) !== `${item.id}`) {
          console.log(
            questions[item.id].id,
            url.searchParams.get(`q${item.id}`),
            `${item.id}`
          );
          pickRandomQuestion(questions);
          question.textContent = questions[questionNumber].question;
          updateQueryString(questionNumber);
        }
        if (url.searchParams.get(`q${item.id}`) === null) {
          pickRandomQuestion(questions);
          question.textContent = questions[questionNumber].question;
          updateQueryString(questionNumber);
        }
      }); */
  }
}

checkAnswerNumber(questions);

export default questionNumber;
