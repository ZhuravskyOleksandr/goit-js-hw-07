// 'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = '';

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxes.append(box);

      size += 10;
    }
    input.value = '';
  }
};

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
};
