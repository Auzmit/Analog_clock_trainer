import { adjustFontSize } from './scripts/adjustFontSize.js';
import { randomTime } from './scripts/random.js';

const btnNextTask = document.querySelector('#btn_next-task');
const arrowMinutes = document.querySelector('#minutes');
const arrowHours = document.querySelector('#hours');
const digitalMinutes = document.querySelector('#digital-minutes');
const digitalHours = document.querySelector('#digital-hours');

let randomedTime = {};

function editTimeNumber(timeNumber) {
  if (timeNumber <= 9) timeNumber = `0${timeNumber}`;
  return timeNumber;
}

function rotateArrows() {
  randomedTime = randomTime();
  // console.log(randomedTime);
  const { angleMinutes } = randomedTime;
  const { angleHours } = randomedTime;
  arrowMinutes.style.transform = `rotate(${angleMinutes}deg)`;
  arrowHours.style.transform = `rotate(${angleHours}deg)`;
}

function onloadActions() {
  // console.log('onload');
  randomedTime = randomTime();
  adjustFontSize();
  rotateArrows();
}

window.onload = onloadActions;
window.onresize = adjustFontSize;

btnNextTask.addEventListener('click', () => {
  if (btnNextTask.innerHTML === 'Show me digital time') {
    digitalMinutes.innerHTML = editTimeNumber(randomedTime.minutes);
    digitalHours.innerHTML = editTimeNumber(randomedTime.hours);
    btnNextTask.innerHTML = 'Next task';
  } else {
    rotateArrows();
    digitalMinutes.innerHTML = '??';
    digitalHours.innerHTML = '??';
    btnNextTask.innerHTML = 'Show me digital time';
  }
});
