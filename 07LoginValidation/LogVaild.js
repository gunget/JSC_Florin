'use strict'

const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    chechInputs();
})

function chechInputs() {
    const userNmValue = userName.value.trim();
    // trim() string에 포함된 whitespace 삭제. 
    const emailValue = email.value.trim();
    const pwd1Value = pwd1.value.trim();
    const pwd2Value = pwd2.value.trim();
    let tureCount = 0

    if (userNmValue === '') {
        errorMsg(userName, 'ID는 반드시 입력해야 합니다');
    } else {
        successMsg(userName);
        tureCount += 1;
    }

    if (emailValue === '') {
        errorMsg(email, 'email은 반드시 입력해야 합니다');
    } else if (!isEmailValid(emailValue)){
        errorMsg(email, '올바른 email을 입력하세요.');
    } else {
        successMsg(email);
        tureCount += 1;        
    }

    if (pwd1Value === '') {
        errorMsg(pwd1, '암호를 입력해주세요');
    } else {
        successMsg(pwd1);        
        tureCount += 1;
    }

    if (pwd2Value === '') {
        errorMsg(pwd2, '암호를 입력해주세요');
    } else if (pwd1Value !== pwd2Value){
        errorMsg(pwd2, '암호가 틀립니다. 다시 확인해 주세요.');
    } else {
        successMsg(pwd2);
        tureCount += 1;        
    }

    if (tureCount === 4) {
        setTimeout(() => {
            alert(`싸이트 가입을 환영합니다. ${userNmValue}!!`)
        }, 1000);
    }
}
function errorMsg(elem, message) {
    const parentElem = elem.parentElement;
    const text = parentElem.querySelector('small');
    text.innerText = message;
    parentElem.classList.add('error');
    setTimeout(() => {
        location.reload()
    }, 2000); 
}

function successMsg(elem){
    const parentElem = elem.parentElement;
    parentElem.classList.add('success');
}

function isEmailValid(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}
// 정규식조건.test(검사항목). 검사항목에 정규식 조건에 부합하는 내용이 있으면 true없으면 false
// 이메일 검증하는 정규식 /^내용$/