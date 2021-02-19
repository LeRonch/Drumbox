let keys = document.querySelectorAll('.key');
document.addEventListener('keydown', playSound);

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (e.repeat) { 
        return 
    }
    
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');

    setTimeout(() => {
        key.classList.remove('playing')}, 300);
  }
