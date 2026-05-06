const greeting = document.querySelector('#greeting');

const fonts = ['Inter', 'monospace', 'serif'];
const colors = ['#ffffff', '#ffff00', '#ff00ff', '#00ffff', '#0000ff', '#ff0000', '#00ff00', '#000000']

let isGlitching = false;

let L2GlitchStarted = false;
let L2Glitching = false;

let currentFrame = 0;

let previousScrollY = 0;
window.scrollLocked = false;

const Sawtooth60 = new Audio('60hz-sawtooth.wav');

window.addEventListener('scroll', () => {
    if (L2GlitchStarted) {
    if (window.scrollLocked) {
      window.scrollTo(0, previousScrollY);
    }
    return;
  }
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
  if(window.scrollY > 600 && !L2GlitchStarted){ //glitch takes over
    L2GlitchStarted = true;
    previousScrollY = window.scrollY + 10;
    window.scrollLocked = true;
    setTimeout(() =>{
      Sawtooth60.play();
      isGlitching = false;
      L2Glitching = true;
      level2Glitch()
      setTimeout(() => {
        console.log('clearing elements with data-section starter');
        document.querySelectorAll('[data-section="starter"]').forEach(el => el.remove());
      document.body.style.backgroundColor = '#000000';
      window.dispatchEvent(new CustomEvent('boot-up'));
      }, 7000);
    }, 1000);
  }
  if(window.scrollLocked){
    window.scrollTo(0, previousScrollY);
  } else {
    previousScrollY = window.scrollY
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



function level2Glitch () {
  if (!L2Glitching) return;
  greeting.classList.add('glitching');
  if(currentFrame % 2 == 0){
    greeting.style.setProperty('--glitch-trans-x', '8px');
    greeting.style.setProperty('--glitch-trans-y', '3px');
    greeting.style.setProperty('--glitch-color', '#ff00ff');
  } else {
    greeting.style.setProperty('--glitch-trans-x', '4px');
    greeting.style.setProperty('--glitch-trans-y', '9px');
    greeting.style.setProperty('--glitch-color', '#ff0000'); 
  }
  currentFrame++;
  requestAnimationFrame(level2Glitch);
}