import soundWrapper from "./sound.js";
import pushishka from "./pushishka.js";
import restartButton from "./restart.js";

const title = document.createElement("div");
title.classList.add("snowman_title");
title.appendChild(soundWrapper);

const titleText = document.createElement("p");
titleText.classList.add("snowman_title_text");
titleText.textContent = "keep the warmth";
title.appendChild(titleText);

title.appendChild(pushishka);

title.appendChild(restartButton);

export default title;
