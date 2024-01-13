export function heartAnim(hearts) {
  const brokenHeart = hearts.pop();
  brokenHeart.style.backgroundImage = `url("./assets/icons/broken-heart.svg")`;
  brokenHeart.style.animationName = 'noBeating';
}
