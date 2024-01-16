export function gloveAnim(glove) {
  glove.classList.add("anim");
}

export function removeClassOnAnimEnd(glove) {
  glove.onanimationend = () => {
    glove.classList.remove("anim");
  };
}
