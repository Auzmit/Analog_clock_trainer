function adjustFontSize() {
  const dgtlTimeParent = document.querySelector('.digital-time').parentNode;
  const dgtlTimeHeight = dgtlTimeParent.offsetHeight;
  let changedFontSize = `${dgtlTimeHeight * 0.8}px`;

  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { digitalTime.style.fontSize = changedFontSize; });

  const spanNextTask = document.getElementById('span_next-task');
  const spanNextTaskWidth = spanNextTask.offsetWidth;
  changedFontSize = `${spanNextTaskWidth * 0.09}px`;
  spanNextTask.style.fontSize = changedFontSize;
}

// function () {

// }

export { adjustFontSize };
