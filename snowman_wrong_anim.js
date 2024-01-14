import { wrongCounter } from "./keyboard.js";

export function snowmanIncorrectAnswerAnim(lalala) {
  if (wrongCounter === 1) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_hat.png')`;
  }
  if (wrongCounter === 2) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_hat_buttonb.png')`;
  }
  if (wrongCounter === 3) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_hat_buttont.png')`;
  }
  if (wrongCounter === 4) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_buttons_scarf.png')`;
  }
  if (wrongCounter === 5) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_left_glove.png')`;
  }
  if (wrongCounter === 6) {
    lalala.style.backgroundImage = `url('./assets/pics/snowman/snowman_nude.png')`;
  }
}
