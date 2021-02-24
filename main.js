let keys = document.querySelectorAll(".key");
document.addEventListener("keydown", playSound);

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (e.repeat) {
    return;
  }

  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 300);
}

function beatBox() {
  function simulateKey(key) {
    let beatz = new Event("keydown", {
      bubbles: true,
    });
    beatz.keyCode = key;
    document.dispatchEvent(beatz);
    let audio = document.querySelector(`audio[data-key="${key}"]`);
    audio.currentTime = 0;
    audio.play();
  }

  function playBeat(time, key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simulateKey(key));
      }, time);
    });
  }

  playBeat(350, 69)
    .then(() => {
      return playBeat(350, 69);
    })
    .then(() => {
      return playBeat(350, 65);
    })
    .then(() => {
      return playBeat(800, 69);
    })
    .then(() => {
      return playBeat(350, 69);
    })
    .then(() => {
      return playBeat(350, 65);
    });
}
