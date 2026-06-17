const music = new Audio('hooligang-music.wav');

music.play();
music.loop = true;

const fastforward = document.querySelector('#fastforward');
const pause = document.querySelector('#pause');
const rewind = document.querySelector('#rewind');
const pause_text = document.querySelector('#pause-text');

pause.addEventListener('click', () => {
    if (music.paused) {
        music.play()
        pause_text.innerText = ''
    } else {
        music.pause()
        pause_text.innerText = ''
    }
})

rewind.addEventListener('click', () => {
    music.currentTime -= 10;
})

fastforward.addEventListener('click', () => {
    music.currentTime += 10;
})