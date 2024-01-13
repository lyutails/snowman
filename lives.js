import { availableLives, commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";

const lives = createLayout({
  elementname: "lives",
  classname: `${commonCSSClassPrefix}_lives`,
  tag: "div",
});

export let hearts = [];

for (let i = 1; i <= availableLives; i++) {
  const heart = createLayout({
    elementname: "heart",
    classname: `${commonCSSClassPrefix}_heart`,
    tag: "div",
    appendto: lives,
  });
  hearts.push(heart);
}

hearts;

export default lives;
