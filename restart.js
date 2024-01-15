import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";
import { keys } from "./keyboard.js";

export let isRestart = false;

const restartButton = createLayout({
  elementname: "restartButton",
  classname: `${commonCSSClassPrefix}_restart`,
  tag: "button",
  textcontent: "restart",
});

restartButton.addEventListener("click", () => {
  isRestart = !isRestart;

  window.history.pushState({}, "", window.location.pathname);

  keys.forEach((key) => {
    key.removeAttribute("disabled");
    key.style.backgroundColor = "lightgreen";
  });
});

console.log(isRestart);

export default restartButton;
