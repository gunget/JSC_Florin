const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");
const agnBtn = document.querySelector(".againBtn");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
      e.target.placeholder = "Wait Until You got a number";
      console.log(e.target);
    }, 10);
    randomSelect();
  }
});

agnBtn.addEventListener("click", () => {
  if (tagsEl.hasChildNodes()) {
    const childs = tagsEl.childNodes; //자식요소들만의 배열을 따로 만들기
    childs.forEach((child) => {
      child.classList.remove("highlighted");
    });
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = ""; //기존에 있던 HTML을 지우기. 새로운 단어가 추가되는게 아니라,
  //그때그때 만들어진 모든 배열요소를 완전히 새로 덧 입히는 것임
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  //참고 setTimeout X초뒤 한번 실행. setInterval X초 간격으로 반복실행.
  const times = 30;
  const interval = setInterval(() => {
    //setInterval을 변수로 지정하지 않으면 정지 못시킴
    const rdmTag = pickRdmTag(); //태그 찾고
    highlitedRdmTag(rdmTag); //칠하고
    setTimeout(() => {
      //100ms뒤에 한번만 지워라
      unhighlitedRdmTag(rdmTag);
    }, 100);
  }, 100); //위과정을 100ms후에 반복

  setTimeout(() => {
    clearInterval(interval); //태그 돌리기 정지
    setTimeout(() => {
      //100ms후에 최종태그 선택
      const finaltag = pickRdmTag();
      highlitedRdmTag(finaltag);
    }, 100);
  }, times * 100); //3초 뒤에 최종선택
}

function pickRdmTag() {
  const tags = document.querySelectorAll(".tag");
  const rdmTg = tags[Math.floor(Math.random() * tags.length)];
  return rdmTg;
}

function highlitedRdmTag(rdmTag) {
  rdmTag.classList.add("highlighted");
}

function unhighlitedRdmTag(rdmTag) {
  rdmTag.classList.remove("highlighted");
}
