import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";

const yep = createLayout({
  tag: "div",
  classname: `${commonCSSClassPrefix}_yep`,
  textcontent: "yep ^^",
  appendto: document.body,
});

export function yepAnim(flag) {
  if (flag === true) {
    yep.style.visibility = "visible";
  } else {
    yep.style.visibility = "hidden";
  }
}
