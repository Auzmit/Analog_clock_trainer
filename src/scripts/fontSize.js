function fontSize() {
  const block = document.querySelector('#showing_time');
  const totalHeight = block.offsetHeight;
  // console.log(totalHeight);
  const arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => {
    // eslint-disable-next-line no-param-reassign
    digitalTime.style.fontSize = `${totalHeight * 0.8} px`;
  });
}

// eslint-disable-next-line import/prefer-default-export
export { fontSize };
