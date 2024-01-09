const songsArray = [
  {
    id: 1,
    song_path:
      "./assets/audio/ジングルベル _ Jingle Bells _ クリスマスソング _ ピンクフォン童謡.mp3",
    song_name: "ジングルベル _ Jingle Bells",
  },
  {
    id: 2,
    song_path: "./assets/audio/Beethoven_-_Für_Elise.mp3",
    song_name: "Für Elise",
  },
  {
    id: 3,
    song_path: "./assets/audio/Nick_Cave_O_Children.mp3",
    song_name: "Nick Cave Children",
  },
];

const soundWrapper = document.createElement("div");
soundWrapper.classList.add("snowman_sound_wrapper");

const soundIcon = document.createElement("div");
soundIcon.classList.add("snowman_sound");
soundWrapper.appendChild(soundIcon);

const volumeControl = document.createElement("input");
volumeControl.classList.add("snowman_volume_control");
volumeControl.setAttribute("type", "range");
volumeControl.setAttribute("min", "0");
volumeControl.setAttribute("max", "100");
soundWrapper.appendChild(volumeControl);

let min = volumeControl.min;
let max = volumeControl.max;
volumeControl.value = 20;

volumeControl.style.background = `linear-gradient(to top, red 0%, red ${
  ((volumeControl.value - min) / (max - min)) * 100
}%, #DEE2E6 ${
  ((volumeControl.value - min) / (max - min)) * 100
}%, #DEE2E6 100%)`;

volumeControl.oninput = function () {
  volumeControl.style.background = `linear-gradient(to top, red 0%, red ${
    ((volumeControl.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 ${
    ((volumeControl.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 100%)`;
};

const audioList = document.createElement("div");
audioList.classList.add("snowman_audiolist");
soundWrapper.appendChild(audioList);

const soundName = document.createElement("div");
soundName.classList.add("snowman_sound_name");
audioList.appendChild(soundName);

const songIcons = document.createElement("div");
songIcons.classList.add("snowman_songicons");
audioList.appendChild(songIcons);

soundName.textContent = songsArray[0].song_name;

let currentSong = new Audio(songsArray[0].song_path);

function setVolume() {
  currentSong.volume = volumeControl.value / 100;
}

setVolume();

let loopSong = currentSong.loop;
loopSong = true;

const songIconsArray = ["jingle", "ballet", "train"];

for (let i = 0; i <= 2; i++) {
  const songIcon = document.createElement("span");
  songIcon.classList.add("snowman_songicon", songIconsArray[i]);
  songIcons.appendChild(songIcon);

  songIcon.onclick = () => {
    soundName.textContent = songsArray[i].song_name;
    currentSong = new Audio(songsArray[i].song_path);
    currentSong.addEventListener("ended", currentSong);
  };
}

function playSound() {
  currentSong.play();
}

soundIcon.onclick = () => {
  if (currentSong.paused) {
    playSound();
    soundIcon.classList.add("anim");
  } else {
    currentSong.pause();
    soundIcon.classList.remove("anim");
  }
};

export default soundWrapper;
