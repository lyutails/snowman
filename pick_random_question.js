import question from "./question.js";
import questions from "./questions.js";

let questionNumber = 0;
const questionNumbers = [];

export function pickRandomQuestion(questions) {
  questionNumber = Math.floor(Math.random() * questions.length);
  console.log(questionNumber);
  question.textContent = questions[questionNumber].question;
  questionNumbers.push(questionNumber);
}

pickRandomQuestion(questions);

console.log(questionNumbers);

questionNumber = questionNumbers.pop();

export default questionNumber;
