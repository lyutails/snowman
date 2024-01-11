import createLayout from "./create_layout.js";
import { letters } from "./constants.js";
import { commonCSSClassPrefix } from "./constants.js";
import { usedLetters } from "./constants.js";

const keyboardBody = createLayout({
  elementname: "keyboardBody",
  classname: `${commonCSSClassPrefix}keyboard_body`,
  tag: "div"
});

letters.forEach((item, i) => {
  item = createLayout({
    tag: "button",
    classname: `${commonCSSClassPrefix}keyboard_letter`,
    textcontent: letters.at(i),
  });
  item.onclick = function () {
    console.log(letters.at(i));
    item.setAttribute("disabled", true);
    // item.style.backgroundColor = "snow";
    usedLetters.push(letters.at(i));
    setKeyBackground(letters.at(i), item);
    // params.append(letters.at(i), "letter");
    updateQueryString(letters.at(i));
    // window.location.href = url.toString();
    console.log(usedLetters);
  };
  keyboardBody.appendChild(item);
});

const keyboardWrapper = createLayout({
  elementname: "keyboardWrapper",
  classname: `${commonCSSClassPrefix}keyboard_wrapper`,
  tag: "div",
  appendchild: keyboardBody,
});

const keyboard = createLayout({
  elementname: "keyboard",
  classname: `${commonCSSClassPrefix}keyboard`,
  tag: "div",
  appendchild: keyboardWrapper,
});

function updateQueryString(value) {
  const url = new URL(window.location);
  url.searchParams.set("key", value);
  window.history.pushState("", "", url.toString());
}

function setKeyBackground(keyValue, element) {
  if (usedLetters.includes(keyValue) === true) {
    element.style.backgroundColor = "snow";
  }
}

document.addEventListener("keydown", function (event) {
  console.log(event.key.toUpperCase());
  usedLetters.push(event.key.toUpperCase());
  updateQueryString(event.key.toUpperCase());
  console.log(usedLetters);
});

export default keyboard;
