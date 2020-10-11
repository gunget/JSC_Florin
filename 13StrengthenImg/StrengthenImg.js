const bgImgEl = document.querySelector('.background');
const inputPwEl = document.getElementById('pwd1')

inputPwEl.addEventListener('input', (ev) => {
    ev.preventDefault();
    const evEl = ev.target.value;
    const evElNum = evEl.length;
    const blrSz = 20 - evElNum * 2;
    bgImgEl.style.filter = `blur(${blrSz}px)`;
});