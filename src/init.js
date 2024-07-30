import { adaptFontSize } from './scripts/adaptFontSize.js';
import { randomTime } from './scripts/random.js';

const spanNextTask = document.querySelector('#span_next-task');
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
  const { angleMinutes } = randomedTime;
  const { angleHours } = randomedTime;
  arrowMinutes.style.transform = `rotate(${angleMinutes}deg)`;
  arrowHours.style.transform = `rotate(${angleHours}deg)`;
}

function onloadActions() {
  adaptFontSize();
  randomedTime = randomTime();
  rotateArrows();
}

window.onload = onloadActions;
window.onresize = adaptFontSize;

spanNextTask.addEventListener('click', () => {
  if (spanNextTask.innerHTML === 'Show me digital time') {
    spanNextTask.innerHTML = 'Next task';
    digitalMinutes.innerHTML = editTimeNumber(randomedTime.minutes);
    digitalHours.innerHTML = editTimeNumber(randomedTime.hours);
  } else {
    spanNextTask.innerHTML = 'Show me digital time';
    rotateArrows();
    digitalMinutes.innerHTML = '??';
    digitalHours.innerHTML = '??';
  }
});
