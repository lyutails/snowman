const title = document.createElement("div");
title.classList.add("snowman_title");

const titleText = document.createElement("p");
titleText.classList.add("snowman_title_text");
titleText.textContent = "keep the warmth";
title.appendChild(titleText);

const pushishka = document.createElement("div");
pushishka.classList.add("snowman_pushishka");
title.appendChild(pushishka);

export default title;
