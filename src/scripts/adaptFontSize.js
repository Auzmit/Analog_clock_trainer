function changeFontSize(node) {
  const parent = node.parentNode;
  const parentWholeHeight = parent.offsetHeight;

  let coeffOfChange;
  if (node.id === 'span_next-task') {
    coeffOfChange = 0.11;
  } else if (node.id === 'github-link') {
    coeffOfChange = 0.08;
  } else {
    coeffOfChange = 0.8;
  }
  const fontSize = `${parentWholeHeight * coeffOfChange}px`;
  node.style.fontSize = fontSize;
}

function adaptFontSize() {
  const spanNextTask = document.getElementById('span_next-task');
  changeFontSize(spanNextTask);

  const githubLink = document.getElementById('github-link');
  changeFontSize(githubLink);

  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { changeFontSize(digitalTime); });

  // const btnClockChangerText = document.getElementById('clock-changer_text');
  const btnClockChangerText = document.querySelector('.btn_clock-changer');
  // console.log(btnClockChangerText);
  // console.log(spanNextTask);
  btnClockChangerText.style.fontSize = spanNextTask.style.fontSize / 2;
}

export { adaptFontSize };
