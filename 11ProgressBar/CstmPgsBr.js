const targetValue = parseInt(
  prompt("원하는 %는 얼마입니까. 1~100까지 숫자 하나를 써주세요.")
);

const pgsDone = document.querySelector(".PgsDone");
pgsDone.setAttribute("data-done", targetValue);
pgsDone.innerText = `${targetValue}%`;
pgsDone.style.width = pgsDone.getAttribute("data-done") + "%";
//엘러먼트의 att중 data를 변화시킴으로서 그에 따른 css값들을 제어하기 위해
//위와같은 형식을 취하는 듯(classlist를 변화시켜 엘러먼트를 효과를 변화시키는 것처럼)
pgsDone.style.opacity = 1;
