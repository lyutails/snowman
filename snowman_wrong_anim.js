import { wrongCounter } from "./keyboard.js";
import { buttonBottom, buttonTop, hat, leftGlove, rightGlove, scarf } from "./snowman.js";

const snowmanClothesArray = [hat, buttonBottom, buttonTop, scarf, leftGlove, rightGlove];

export function snowmanIncorrectAnswerAnim() {
  for(let i = 0; i <= snowmanClothesArray.length; i++) {
    if (wrongCounter === i+1) {
      snowmanClothesArray[i].style.backgroundImage = `none`;
    }
  }
}
