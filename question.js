import questions from "./questions.js";

const question = document.createElement('div');
question.classList.add('snowman_question');
question.textContent = questions[0].question;

export default question;