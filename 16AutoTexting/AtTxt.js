const textEl = document.getElementById("text");
const comment = "Where are you going now?";
let idx = 1;

setInterval(() => {
  writeText();
}, 50);

function writeText() {
  textEl.innerText = comment.slice(0, idx);
  //한글자씩 더하는게 아니라 한글자씩 길어진 string을 갈아 끼우는 것

  idx++;

  if (idx > comment.length) {
    setTimeout(() => {
      idx = 1;
    }, 1000);
  }
}
