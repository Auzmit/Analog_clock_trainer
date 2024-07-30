function randomInteger(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Math.floor(randomNumber);
}

function randomTime() {
  const hours = randomInteger(0, 11);
  const minutes = randomInteger(0, 59);
  const angleMinutes = minutes * 6;
  const angleHours = hours * 30 + minutes * 0.5;

  return {
    hours, minutes, angleMinutes, angleHours,
  };
}

export { randomTime };
// export { randomInteger, randomTime };
