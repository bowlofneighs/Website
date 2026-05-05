const enter = document.querySelector('#welcome');

enter.addEventListener('click', () => {
    enter.style.opacity = '0';
    enter.style.transition = 'opacity 1s';
    setTimeout(() => enter.remove(), 1000);
});
