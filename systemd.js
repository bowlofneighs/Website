const systemd = document.querySelector('#systemd-bootup-paragraph');
console.log(systemd);
systemd.innerHTML += 'Welcome to <span style="color: #b4befe"> My Website</span>'
const hooligang = new Audio('hooligang.mp3');
addEventListener('boot-up', bootSequence);

function bootSequence(){
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Listening on Slack.', 0); //&nbsp; is two spaces
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Hacking the Club', 0);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Laundering Money.', 0);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Creating a dumpster-fire in meta.', 0);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Frauding my hours.', 800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Flavoring the town.', 810);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Dancing with stars.', 810);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Creating haikus.', 810);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Inviting HQ members to a huddle in meta.', 2000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] For legal reasons these are jokes', 2000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] For joking reasons these are laws', 2000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] If you couldn\'t tell I like linux', 2800); //I need a backspace to escape the '
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I\'m writing this code in class', 2800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] If you\'re seeing this you should DM me to join my personal channel', 2800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Fun fact: blueprint was the first YSWS that I actually shipped something to', 2800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Reading Happenings', 3600);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Downvoting random meta posts for the love of the game', 3600);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Beating the stardance email bot at tic-tac-toe', 3600);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Crashing out at sine rider because graphing math makes no sense', 3600);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Being horrified at out-of-context', 3600);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] No like actually theres some crazy stuff in there', 4400);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I\'m looking through slack for more stuff but I can\'t find anything', 4400);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I think I\'m cooking up with this website though', 4400);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] The missile knows where it is at all times', 4400);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Refusing to tell people random things because \"I\'m under NDA\" but the information doesn\'t actually fall under NDA', 4400);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I can\'t tell if this font is actually monospace', 5200);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Toki\'ing my pona', 5200);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Typing on my keyboard', 5200);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] TS animation is taking way too long to make', 5200);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Wrenching my spoon', 5200);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Bowling my neighs', 6000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Verbing my noun', 6000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I have no clue what to put here', 6000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] Well I\'m almost near the end anyway', 6000);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] I had to teach someone how to delete cookies/cache because they accidentally clicked \"I\'m Under 18\" on omoggle and now they\'re playing omoggle in class', 6800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] This friggin boot-up animation has taken me an hour and a half', 6800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] They\'re really locked in on omoggle', 6800);
    setTimeout(() => systemd.innerHTML += '<br>[ <span style="color: #00ff00">&nbsp;OK&nbsp;</span> ] alrighty, we\'re booting now', 7600);
    setTimeout(greeting_func, 7600);
    
}

function greeting_func(){
    hooligang.play()
    setTimeout(() => systemd.innerHTML = 'Y<span class="caret">█</span>', 300); 
    setTimeout(() => systemd.innerHTML = 'Yo<span class="caret">█</span>', 375);
    setTimeout(() => systemd.innerHTML = 'Yo, <span class="caret">█</span>', 450);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>y<span class="caret">█</span>', 500);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you<span class="caret">█</span>', 575);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wan<span class="caret">█</span>', 625);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna<span class="caret">█</span>', 675);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna se<span class="caret">█</span>', 725);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see<span class="caret">█</span>', 825);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see som<span class="caret">█</span>', 950);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see someth<span class="caret">█</span>', 1050);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see something<span class="caret">█</span>', 1150);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see something co<span class="caret">█</span>', 1200);
    setTimeout(() => systemd.innerHTML = 'Yo,<br>you wanna see something cool?<span class="caret">█</span>', 1250);
    setTimeout(() => systemd.innerHTML = 'No. <span class="caret">█</span>', 2125);
    setTimeout(() => systemd.innerHTML = 'We<span class="caret">█</span>', 3000);
    setTimeout(() => systemd.innerHTML = 'Well<span class="caret">█</span>', 3125);
    setTimeout(() => systemd.innerHTML = 'Well, I<span class="caret">█</span>', 3200);
    setTimeout(() => systemd.innerHTML = 'Well, Ima<span class="caret">█</span>', 3250);
    setTimeout(() => systemd.innerHTML = 'Well, I\'ma do<span class="caret">█</span>', 3350);
    setTimeout(() => systemd.innerHTML = 'Well, I\'ma do it<span class="caret">█</span>', 3550);
    setTimeout(() => systemd.innerHTML = 'Well, I\'ma do it any<span class="caret">█</span>', 3625);
    setTimeout(() => systemd.innerHTML = 'Well, I\'ma do it anyway<span class="caret">█</span>', 3750);
}
