console.log('shake.js loaded')
const tert_div = document.querySelectorAll('.tert-div');
console.log(tert_div);

setInterval(() =>{
    tert_div.forEach(el =>{
        el.style.setProperty('--shake-trans-y', (Math.random()*50) + 'px')
        el.style.setProperty('--shake-trans-x', (Math.random()*50) + 'px')
    })
}, 50);