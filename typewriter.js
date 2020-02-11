"use strict";
window.addEventListener("DOMContentLoaded", init);

let text = document.querySelector(".typewritten").textContent;
let counter = 1;

function init() {
  document.querySelector(".typewritten").textContent = "";
  document.querySelector(".typewritten").textContent = text.substring(0, counter);
  counter++;

  setTimeout(loop, 300);
}

function loop() {
  if (text.length >= counter) {
    init();
  }
}
