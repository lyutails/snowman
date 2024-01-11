import questions from "./questions.js";
import checkIfAnswerContainsPressedLettter from "./check_answer_letter.js";

const word = document.createElement("div");
word.classList.add("snowman_word");

const answerArray = questions[0].answer.toUpperCase().split("");
const answer = questions[0].answer;
localStorage.setItem("answer", answer);

answerArray.forEach((letter, i) => {
  letter = document.createElement("div");
  letter.classList.add("snowman_answer_letter");
  letter.textContent = answerArray.at(i);
  letter.style.color = "transparent";
  checkIfAnswerContainsPressedLettter(answerArray, letter);
  word.appendChild(letter);
});

export default word;
