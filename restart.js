import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";

let ifRestart = false;

const restartButton = createLayout({
  elementname: "restartButton",
  classname: `${commonCSSClassPrefix}_restart`,
  tag: "button",
  textcontent: "restart"
});

restartButton.addEventListener("click", () => {
  ifRestart = true;
  console.log(ifRestart);
});

export default restartButton;
