function adjustFontSize() {
  const block = document.querySelector('#showing_time');
  const totalHeight = block.offsetHeight;

  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => {
    digitalTime.style.fontSize = `${totalHeight * 0.8} px`;
  });
}

export { adjustFontSize };
