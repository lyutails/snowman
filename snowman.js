import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";

const snowman = createLayout({
  elementname: "snowman",
  tag: "div",
  classname: `${commonCSSClassPrefix}_snowman`,
});

export default snowman;
