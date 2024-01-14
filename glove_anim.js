import { correctCounter } from "./keyboard.js";

export function gloveAnim(glove) {
  if (correctCounter === 1) {
    glove.classList.add("anim");
  }
  if (correctCounter === 2) {
    glove.classList.add("anim");
  }
  if (correctCounter === 3) {
    glove.classList.add("anim");
  }
  if (correctCounter === 4) {
    glove.classList.add("anim");
  }
  if (correctCounter === 5) {
    glove.classList.add("anim");
  }
  if (correctCounter === 6) {
    glove.classList.add("anim");
  }
}

export function removeClassOnAnimEnd(glove) {
  glove.onanimationend = () => {
    glove.classList.remove("anim");
  };
}
