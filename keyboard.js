const keyboard = document.createElement("div");
keyboard.classList.add("snowman_keyboard");

const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("snowman_keyboard_wrapper");
keyboardWrapper.textContent = "keep the warmth";
keyboard.appendChild(keyboardWrapper);

const keyboardBody = document.createElement("div");
keyboardBody.classList.add("snowman_keyboard_body");

const lettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

lettersArray.forEach((item, i) => {
  item = document.createElement("div");
  item.classList.add("snowman_keyboard_letter");
  item.textContent = lettersArray.at(i);
  keyboardBody.appendChild(item);
});

/* for (let i = 0; i <= lettersArray; i++) {
  item[i] = document.createElement("div");
  item.classList.add("snowman_keyboard_letter");
  // item[i].textContent = [i];
  keyboardBody.appendChild(item);
} */

keyboardWrapper.appendChild(keyboardBody);

export default keyboard;
