import questions from "./questions.js";

const word = document.createElement("div");
word.classList.add("snowman_word");

questions[0].answer.split("").forEach((item) => {
  item = document.createElement("div");
  item.classList.add("snowman_answer_letter");
  word.appendChild.item;
});

export default word;
