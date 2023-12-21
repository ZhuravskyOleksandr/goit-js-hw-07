'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector('body');
const colorCode = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', changeColor);

function changeColor() {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorCode.textContent = bgColor;
};
