const dogResult = document.getElementById('dog-result');
const catResult = document.getElementById('cat-result');
const dogChgBtn = document.getElementById('dog-btn');
const catChgBtn = document.getElementById('cat-btn');

dogChgBtn.addEventListener('click', getPicsHdl);

function getPicsHdl() {
    fetch('https://random.dog/woof.json')//별도 언급 없으면 get방식 요청. promise객체로 만들어서 전송
    //정상적으로 응답이 완료되면 response를 돌려줌. 안되면 될때까지 pending상태
    .then((res) => res.json())//응답을 json형식으로 만들어서 반환
    .then( data => {
        if (data.url.includes('mp4')) { //url내에 mp4라는 string이 있는지 여부를 boolean으로 반환
            getPicsHdl();
        } else {
        dogResult.innerHTML = `<img src="${data.url}"/>`;    
        }        
    })
}

catChgBtn.addEventListener('click', getPicsHdl2);

function getPicsHdl2() {
    fetch('https://aws.random.cat/meow')//별도 언급 없으면 get방식 요청. promise객체로 만들어서 전송
    //정상적으로 응답이 완료되면 response를 돌려줌. 안되면 될때까지 pending상태
    .then((res) => res.json())//응답을 json형식으로 만들어서 반환
    .then( data => {
        if (data.file.includes('mp4')) { //url내에 mp4라는 string이 있는지 여부를 boolean으로 반환
            console.log(data);
            getPicsHdl2();
        } else {
        catResult.innerHTML = `<img src="${data.file}"/>`;    
        }        
    })
}

