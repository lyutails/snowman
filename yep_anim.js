import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";

export const yep = createLayout({
  tag: "div",
  classname: `${commonCSSClassPrefix}_yep`,
  textcontent: "yep ^^",
  appendto: document.body,
});

export function yepAnim(flag, letter) {
  if (flag === true) {
    yep.textContent = `yep ^^ the answer you're looking for has "${letter}" \\o/`;
    yep.style.visibility = "visible";
  } else {
    yep.style.visibility = "hidden";
  }
}
