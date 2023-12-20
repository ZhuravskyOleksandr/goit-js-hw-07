'use strict';

const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

const h1 = document.querySelector('h1');

inputName.addEventListener('input', setName);

function setName(event) {
    const enteredName = event.currentTarget.value.trim();

    if (enteredName === '' || enteredName === ' ') {
       return outputName.textContent = 'Anonymous';
    }    
    outputName.textContent = enteredName;
};