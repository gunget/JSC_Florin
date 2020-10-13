const NumEls = document.querySelectorAll('.counter');

NumEls.forEach((NumEl) => {
    NumEl.innerText = '0';

    const counter = () => {
        const targetVl = +NumEl.getAttribute('data-target');
        // string을 숫자로 만드는 간단한 방법. +연산자를 붙여줌
        // 숫자를 문자로 바꿀 땐 + "" 해줌
        const strtVl = +NumEl.innerText;
        const increment = targetVl / 1000; //증가량 정하기

        if (strtVl < targetVl) {
            NumEl.innerText = `${Math.ceil(strtVl + increment)}`;
            setTimeout(counter, 1); //재귀적 함수 호출
            //setTimeout은 1초뒤 해당함수를 한번만 실행. 그런데 자기자신을
            //호출했으므로 1ms간격으로 계속 반복되어 실행되는 것
        } else {
            NumEl.innerText = targetVl;
        }
    }

    counter(); //객체를 함수처럼 호출. 
})