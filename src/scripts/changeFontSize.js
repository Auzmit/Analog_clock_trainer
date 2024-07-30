function changeFontSize() {
  // change digital-time's fontSize
  const dgtlTimeParent = document.querySelector('.digital-time').parentNode;
  const dgtlTimeHeight = dgtlTimeParent.offsetHeight;
  let changedFontSize = `${dgtlTimeHeight * 0.8}px`;
  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { digitalTime.style.fontSize = changedFontSize; });

  // change span_next-task's fontSize
  const spanNextTask = document.getElementById('span_next-task');
  const spanNextTaskWidth = spanNextTask.offsetWidth;
  changedFontSize = `${spanNextTaskWidth * 0.1}px`;
  spanNextTask.style.fontSize = changedFontSize;
}

export { changeFontSize };
