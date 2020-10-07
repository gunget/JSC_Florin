const body = document.body;
const endDate = new Date("December 31 2020 23:59:59");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const interval = setInterval(() => {
  creatSnowFlake();
}, 50);
const inerval2 = setInterval(() => {
  getTimeleft();
}, 1000);

function creatSnowFlake() {
  const snwFlk = document.createElement("i");
  snwFlk.classList.add("fas");
  snwFlk.classList.add("fa-snowflake");
  snwFlk.style.left = Math.random() * window.innerWidth + "px";
  snwFlk.style.animationDuration = Math.random() * 3 + 2 + "s"; //최대 5초 최소 2초
  snwFlk.style.opacity = Math.random();
  snwFlk.style.fontSize = Math.random() * 10 + 10 + "px";

  body.appendChild(snwFlk);
  setTimeout(() => {
    snwFlk.remove();
  }, 2000);
}

function getTimeleft() {
  const startTime = new Date();
  const diff = endDate - startTime;
  console.log(diff);
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // ms단위로 표시됨. 따라서 1000을 나눠줘 s로 만들고 60으로 나눠 분으로, 60으로 또 나눠 시로,
  //이걸 24로 나눠 하루 단위로 만듦
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24; //하루로 나눈 나머지 시간
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60; //시로 나눈 나머지 분
  const secondsLeft = Math.floor(diff / 1000) % 60; //분으로 나눈 나머지 초
  dayEl.innerText = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hourEl.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minutesEl.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  secondEl.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
}
