'use strict'

const navOpenBtn = document.querySelector('.netflix_nav_btn.open');
const navCloseBtn = document.querySelector('.netflix_nav_btn.close');
const navBars = document.querySelectorAll('.netflix_nav');

navOpenBtn.addEventListener('click', () => {
    navBars.forEach(elem => {
        elem.classList.add('visible');
    });
})

navCloseBtn.addEventListener('click', () => {
    navBars.forEach(elem => {
        elem.classList.remove('visible');
    });
})