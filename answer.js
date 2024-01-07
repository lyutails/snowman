import questions from "./questions.js";

const word = document.createElement("div");
word.classList.add("snowman_word");

const asnwerArray = questions[0].answer.split("");

asnwerArray.forEach((letter, i) => {
  letter = document.createElement("div");
  letter.classList.add("snowman_answer_letter");
  letter.textContent = asnwerArray.at(i);
  word.appendChild(letter);
});

export default word;
