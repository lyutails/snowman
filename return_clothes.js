import { wrongCounter } from "./keyboard.js";
import { isRestart } from "./restart.js";
import {
  buttonBottom,
  buttonTop,
  hat,
  leftGlove,
  rightGlove,
  scarf,
} from "./snowman.js";

const snowmanClothesArray = [
  hat,
  buttonBottom,
  buttonTop,
  scarf,
  leftGlove,
  rightGlove,
];

export function returnClothes() {
  for (let i = 0; i < snowmanClothesArray.length; i++) {
    snowmanClothesArray[i].style.visibility = `visible`;
  }
}
