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
  // const parentWholeWidth = parent.offsetWidth;
  const parentWholeHeight = parent.offsetHeight;

  let coeffOfChange;
  if (node.id === 'span_next-task') {
    // console.log('span_next-task');
    coeffOfChange = 0.11;
  } else if (node.id === 'github-link') {
    coeffOfChange = 0.08;
  } else {
    coeffOfChange = 0.8;
    // console.log(coeffOfChange);
  }
  // const fontSize = `${parentWholeWidth * coeffOfChange}px`;
  const fontSize = `${parentWholeHeight * coeffOfChange}px`;
  node.style.fontSize = fontSize;

  // console.log(node);
  // console.log(node.className);
  // console.log(node.id);
  // console.log(coeffOfChange);
}

function adaptFontSize() {
  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => { changeFontSize(digitalTime); });

  const spanNextTask = document.getElementById('span_next-task');
  changeFontSize(spanNextTask);

  const githubLink = document.getElementById('github-link');
  changeFontSize(githubLink);
  // console.log(githubLink.style.fontSize);

  // change digital-time's fontSize
  // const dgtlTimeParent = document.querySelector('.digital-time').parentNode;
  // const dgtlTimeHeight = dgtlTimeParent.offsetHeight;
  // let changedFontSize = `${dgtlTimeHeight * 0.8}px`;
  // const arrDigitalTime = document.querySelectorAll('.digital-time');
  // arrDigitalTime.forEach((digitalTime) => { digitalTime.style.fontSize = changedFontSize; });

  // change span_next-task's fontSize
  // const spanNextTask = document.getElementById('span_next-task');
  // const spanNextTaskWidth = spanNextTask.offsetWidth;
  // changedFontSize = `${spanNextTaskWidth * 0.1}px`;
  // spanNextTask.style.fontSize = changedFontSize;
}

export { adaptFontSize };
