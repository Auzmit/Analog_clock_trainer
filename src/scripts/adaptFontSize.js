function changeFontSize(node) {
  const parent = node.parentNode;
  const parentWholeHeight = parent.offsetHeight;

  let coeffOfChange;
  if (node.id === 'span_next-task') {
    coeffOfChange = 0.11;
  } else if (node.id === 'github-link') {
    coeffOfChange = 0.08;
  } else if (node.className === 'digital-time') {
    coeffOfChange = 0.8;
  } else if (node.className === 'btn_clock-changer') {
    coeffOfChange = 0.2;
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

  const arrBtnClockChangerText = document.querySelectorAll('.btn_clock-changer');
  arrBtnClockChangerText.forEach((btnClockChangerText) => { changeFontSize(btnClockChangerText); });
}

export { adaptFontSize };
