// 'use strict'

const btn = document.getElementById('changeBtn');
const text = document.querySelector('.colorText')
const body = document.body;

function changeColor() {
    const num1 = getRdmNum();
    const num2 = getRdmNum();
    const num3 = getRdmNum();
    const rdmColor = `rgb(${num1}, ${num2}, ${num3})`;
    body.style.background = (rdmColor)
    text.innerText = rdmColor;
}

btn.addEventListener('click', changeColor);

function getRdmNum() {
    return Math.floor(Math.random() * 256);
}
