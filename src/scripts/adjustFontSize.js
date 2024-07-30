function adjustFontSize() {
  const dgtlTimeParent = document.querySelector('.digital-time').parentNode;
  const dgtlTimeHeight = dgtlTimeParent.offsetHeight;
  let changedFontSize = `${dgtlTimeHeight * 0.8}px`;

  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { digitalTime.style.fontSize = changedFontSize; });

  const btnNextTask = document.getElementById('btn_next-task');
  // const btnNextTaskHeight = btnNextTask.offsetHeight;
  // changedFontSize = `${btnNextTaskHeight * 0.4}px`;
  const btnNextTaskWidth = btnNextTask.offsetWidth;
  changedFontSize = `${btnNextTaskWidth * 0.09}px`;
  btnNextTask.style.fontSize = changedFontSize;
  // console.log('adjustFontSize');
}

// function () {

// }

export { adjustFontSize };
