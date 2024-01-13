let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let sec = document.getElementById('sec');
let header = document.querySelector('header');
let homeBtn = document.getElementById('homebtn');
let aboutBtn = document.getElementById('aboutbtn');
let contactBtn = document.getElementById('contactbtn');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    stars.style.bottom = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginTop = -value * 1 + 'px';
    if(value < 3) btn.style.zIndex = 21;
    if(value > 3) btn.style.zIndex = 10;
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

    if(value < 759)
    {
        homeBtn.classList.add('active');
        aboutBtn.classList.remove('active');
    }

    if(value > 760 && value < 1749) {
        aboutBtn.classList.add('active');
        homeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    }
    if(value > 1750) {
        contactBtn.classList.add('active')
        aboutBtn.classList.remove('active')
    }
})