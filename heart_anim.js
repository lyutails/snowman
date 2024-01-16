export function heartAnim(hearts, wrongCounter) {
  // const brokenHeart = hearts.pop();
  const brokenHeart = hearts.at(-wrongCounter);
  console.log(hearts);
  brokenHeart.style.backgroundImage = `url("./assets/icons/broken-heart.svg")`;
  brokenHeart.style.animationName = "noBeating";
}

export function repairHeart(hearts) {
  hearts.forEach((heart) => {
    if (
      (heart.style.backgroundImage = `url("./assets/icons/broken-heart.svg")`)
    ) {
      heart.style.backgroundImage = `url("./assets/icons/heart.svg")`;
    }
  });
}
