const open = document.querySelector('#open');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.modal_container');

openBtn.addEventListener('click', () => {
    container.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    container.classList.remove('show');
});