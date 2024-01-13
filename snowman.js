import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";
import { yep } from "./yep_anim.js";

const snowman = createLayout({
  elementname: "snowman",
  tag: "div",
  classname: `${commonCSSClassPrefix}_snowman`,
  appendchild: yep
});

export default snowman;
