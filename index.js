import keyboard from "./keyboard.js";
import snowman from "./snowman.js";
import title from "./title.js";
import lives from "./lives.js";
import footer from "./footer.js";
import word from "./answer.js";
import question from "./question.js";

const body = document.body;
const snowmanWrapper = document.createElement("div");
snowmanWrapper.classList.add("snowman_wrapper");
body.appendChild(snowmanWrapper);
snowmanWrapper.appendChild(title);
snowmanWrapper.appendChild(snowman);
snowmanWrapper.appendChild(lives);
snowmanWrapper.appendChild(keyboard);
snowmanWrapper.appendChild(word);
snowmanWrapper.appendChild(question);
snowmanWrapper.appendChild(footer);
