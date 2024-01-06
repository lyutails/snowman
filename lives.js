const lives = document.createElement('div');
lives.classList.add('snowman_lives');

for (let i = 0; i <= 5; i++) {
  const heart = document.createElement("div");
  heart.classList.add('snowman_heart');
  lives.appendChild(heart);
}

export default lives;