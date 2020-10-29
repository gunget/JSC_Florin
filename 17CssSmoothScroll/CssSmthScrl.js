const anchorElms = document.getElementsByTagName("a");

let idx = 0;

window.addEventListener("mouseup", () => {
  if (idx < anchorElms.length - 1) {
    anchorElms[idx + 1].click();
    idx++;
  } else {
    anchorElms[0].click();
    idx = 0;
  }
});
