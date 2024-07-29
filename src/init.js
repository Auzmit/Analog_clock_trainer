import { fontSize } from './scripts/fontSize.js';

const btnNextTask = document.querySelector('#btn_next-task');
const arrowMinutes = document.querySelector('#minutes');
const arrowHours = document.querySelector('#hours');
const digitalMinutes = document.querySelector('#digital-minutes');
const digitalHours = document.querySelector('#digital-hours');

let randomedTime = randomTime();
// let randomedMinutes = editTimeNumber(randomedTime.minutes);
// let randomedHours = editTimeNumber(randomedTime.hours);

window.onload = rotateArrows();
window.onload = fontSize;
window.onresize = fontSize;

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

function rotateArrows() {
  randomedTime = randomTime();
  // console.log(randomedTime);
  const { angleMinutes } = randomedTime;
  const { angleHours } = randomedTime;
  arrowMinutes.style.transform = `rotate(${angleMinutes}deg)`;
  arrowHours.style.transform = `rotate(${angleHours}deg)`;
}

function randomTime() {
  const hours = randomInteger(0, 11);
  const minutes = randomInteger(0, 59);
  const angleMinutes = minutes * 6;
  const angleHours = hours * 30 + minutes * 0.5;

  // if (hours <= 9) hours = '0' + hours;
  // if (minutes <= 9) minutes = '0' + minutes;
  console.log(hours, ':', minutes);
  return {
    hours, minutes, angleMinutes, angleHours,
  };
}

function randomInteger(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Math.floor(randomNumber);
}

function editTimeNumber(timeNumber) {
  if (timeNumber <= 9) timeNumber = `0${timeNumber}`;
  return timeNumber;
}
