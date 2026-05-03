const greeting = document.querySelector('#greeting');

const fonts = ['Inter', 'monospace', 'serif'];
const colors = ['#ffffff', '#ffff00', '#ff00ff', '#00ffff', '#0000ff', '#ff0000', '#00ff00', '#000000']

let isGlitching = false;


window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    greeting.classList.add('glitching');
    isGlitching = true;
  }  else if(window.scrollY < 500){
    greeting.classList.remove('glitching');

    isGlitching = false;

    greeting.style.transform = '';
    greeting.style.color = '';
    greeting.style.fontFamily = '';
  }
  if(window.scrollY > 600){
    window.addEventListener('wheel', preventScroll, { passive: false});
    window.addEventListener('touchmove', preventScroll, {passive: false});
    window.addEventListener('keydown', preventKeyScroll);
  }
});

setInterval(() => {
    if (isGlitching) {
        greeting.classList.add('glitching');
        greeting.style.setProperty('--glitch-trans-x', (Math.random() * 20 - 10) + 'px');
        greeting.style.setProperty('--glitch-trans-y', (Math.random() * 10 - 5) + 'px');
        greeting.style.setProperty('--glitch-skew-x', (Math.random() * 10 - 5) + 'deg');
        greeting.style.setProperty('--glitch-skew-y', (Math.random() * 10 - 5) + 'deg');
        greeting.style.setProperty('--glitch-color', colors[Math.floor(Math.random() * colors.length)]);
        greeting.style.setProperty('--glitch-font-family', (Math.random() < 0.2 ? 'monospace' : 'Playwrite DE SAS'));
    }
}, 100);


function preventScroll(event) {
  event.preventDefault();
}

function preventKeyScroll(event){
  if (['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
  }
}