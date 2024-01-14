import { wrongCounter } from "./keyboard.js";
import { buttonBottom, buttonTop, hat, leftGlove, rightGlove, scarf } from "./snowman.js";

export function snowmanIncorrectAnswerAnim() {
  if (wrongCounter === 1) {
    hat.style.backgroundImage = `none`;
  }
  if (wrongCounter === 2) {
    buttonBottom.style.backgroundImage = `none`;
  }
  if (wrongCounter === 3) {
    buttonTop.style.backgroundImage = `none`;
  }
  if (wrongCounter === 4) {
    scarf.style.backgroundImage = `none`;
  }
  if (wrongCounter === 5) {
    leftGlove.style.backgroundImage = `none`;
  }
  if (wrongCounter === 6) {
    rightGlove.style.backgroundImage = `none`;
  }
}
