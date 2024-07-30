function changeFontSize(node) {
  // let node;
  // let parent;
  // if (nodeAtribut === 'class') {
  //   node = document.getElementById(nodeName);
  //   parent = node.parentNode;
  // } else {
  //   node = document.getElementById(nodeName);
  //   parent = node.parentNode;
  //   parent = document.querySelector('.' + nodeName);
  // }
  // const node = document.querySelector(nodeName);
  const parent = node.parentNode;
  const parentWholeHeight = parent.offsetHeight;
  const fontSize = `${parentWholeHeight * 0.08}px`;
  node.style.fontSize = fontSize;
}

function adaptFontSize() {
  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { changeFontSize(digitalTime); });

  const spanNextTask = document.getElementById('span_next-task');
  changeFontSize(spanNextTask);

  const githubLink = document.getElementById('github-link');
  changeFontSize(githubLink);
}

export { adaptFontSize };
