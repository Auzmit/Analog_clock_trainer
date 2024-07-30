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
}

export { adaptFontSize };
