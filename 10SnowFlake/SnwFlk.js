const body = document.body;

const interval = setInterval(() => {
  creatSnowFlake();
}, 50);

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
  }, 5000);
}
