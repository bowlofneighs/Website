const arrow = document.querySelector('#scroll-arrow');

setTimeout(() =>{
    arrow.classList.add('visible');
    arrow.style.pointerEvents = 'auto';
}, 500);

arrow.addEventListener('click', () => {
    window.scrollBy({ top: 400, behavior: 'smooth'});
});

window.addEventListener('scroll', () =>{
    if (window.scrollY > 100){
        arrow.classList.remove('visible');
        arrow.style.pointerEvents = 'none';
    }
    if (window.scrollY < 100){
        arrow.classList.add('visible');
        arrow.style.pointerEvents = 'auto';
    }
});