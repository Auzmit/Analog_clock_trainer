import { fontSize } from "./scripts/fontSize.js";

let btnNextTask = document.querySelector('#btn_next-task');
let arrowMinutes = document.querySelector('#minutes');
let arrowHours = document.querySelector('#hours');
let digitalMinutes = document.querySelector('#digital-minutes');
let digitalHours = document.querySelector('#digital-hours');

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
  let minutes_angle = randomedTime.minutes_angle;
  let hours_angle = randomedTime.hours_angle;
  arrowMinutes.style.transform = 'rotate(' + minutes_angle + 'deg)'; 
  arrowHours.style.transform = 'rotate(' + hours_angle + 'deg)'; 
}

function randomTime() {
  let hours = randomInteger(0, 11);
  let minutes = randomInteger(0, 59);
  let minutes_angle = minutes*6;
  let hours_angle = hours*30 + minutes*0.5;

  // if (hours <= 9) hours = '0' + hours;
  // if (minutes <= 9) minutes = '0' + minutes;
  console.log(hours, ':', minutes);
  return {hours, minutes, minutes_angle, hours_angle};
}

function randomInteger(min, max) {
  let randomNumber = Math.random() * (max - min + 1) + min;
  return Math.floor(randomNumber);
}

function editTimeNumber(timeNumber) {
  if (timeNumber <= 9) timeNumber = '0' + timeNumber;
  return timeNumber;
}