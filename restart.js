let ifRestart = false;

const restartButton = document.createElement("button");
restartButton.classList.add("snowman_restart");
restartButton.textContent = "restart";
restartButton.addEventListener('click', () => {
    ifRestart = true;
    console.log(ifRestart);
})

export default restartButton;
