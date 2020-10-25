"use strict";

const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const numOfSqrs = 500;

for (let i = 0; i < numOfSqrs; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setElColor(square);
  });

  square.addEventListener("mouseout", () => {
    setElColorOff(square);
  });

  container.appendChild(square);
}

function rdmClr() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setElColor(square) {
  const color = rdmClr();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function setElColorOff(square) {
  square.style.background = "#1d1d1d";
  square.style.boxShadow = `0 0 2px #000`;
}
