import questions from "./questions.js";
import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";

const question = createLayout({
  tag: "div",
  classname: `${commonCSSClassPrefix}_question`,
  elementname: "question",
});

question.textContent = questions[0].question;

export default question;
