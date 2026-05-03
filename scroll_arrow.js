const arrow = document.querySelector('#scroll-arrow');

setTimeout(() =>{
    arrow.classList.add('visible');
}, 500);

arrow.addEventListener('click', () => {
    window.scrollBy({ top: 400, behavior: 'smooth'});
});

window.addEventListener('scroll', () =>{
    if (window.scrollY > 100){
        arrow.classList.remove('visible');
    }
});