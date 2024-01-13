import soundWrapper from "./sound.js";
import pushishka from "./pushishka.js";
import restartButton from "./restart.js";
import appendChildren from "./multiple_appendchild.js";
import createLayout from "./create_layout.js";
import { commonCSSClassPrefix } from "./constants.js";

const titleText = createLayout({
  elementname: "titleText",
  classname: `${commonCSSClassPrefix}_title_text`,
  tag: "p",
  textcontent: "keep the warmth"
});

const title = createLayout({
  elementname: "title",
  classname: `${commonCSSClassPrefix}_title`,
  tag: "div"
});

appendChildren({
  elementAppendChildrenTo: title,
  children: [soundWrapper, titleText, pushishka, restartButton],
});

export default title;
