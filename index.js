import keyboard from "./keyboard.js";
import snowman from "./snowman.js";
import title from "./title.js";
import lives from "./lives.js";
import footer from "./footer.js";
import word from "./answer.js";
import question from "./question.js";
import appendChildren from "./multiple_appendchild.js";
import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";
import { canvas } from "./snowflake.js";

const body = document.body;
const snowmanWrapper = createLayout({
  elementname: "snowmanWrapper",
  tag: "div",
  classname: `${commonCSSClassPrefix}_wrapper`,
});
body.appendChild(snowmanWrapper);

appendChildren({
  elementAppendChildrenTo: snowmanWrapper,
  children: [title, snowman, canvas, lives, keyboard, word, question, footer],
});
