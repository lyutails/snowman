function checkIfAnswerContainsPressedLetter(array, element) {
  const url = new URL(window.location);
  console.log(url.searchParams.get("key"));
  if (array.includes(url.searchParams.get("key")) === true && element.textContent === url.searchParams.get("key")) {
    element.style.color = "black";
  }
}

export default checkIfAnswerContainsPressedLetter;
