'use strict';

const red = document.getElementById('red');
const redValue = document.getElementById('red-value');
const green = document.getElementById('green');
const greenValue = document.getElementById('green-value');
const blue = document.getElementById('blue');
const blueValue = document.getElementById('blue-value');
const colorBox = document.querySelector('.color-box');

const init = function () {
  window.addEventListener('load', () => {
    redValue.textContent = red.value;
    greenValue.textContent = green.value;
    blueValue.textContent = blue.value;
  });
};
init();

red.addEventListener('input', () => {
  redValue.textContent = red.value;
  showColors();
});

green.addEventListener('input', () => {
  greenValue.textContent = green.value;
  showColors();
});

blue.addEventListener('input', () => {
  blueValue.textContent = blue.value;
  showColors();
});

function showColors() {
  colorBox.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

showColors();
