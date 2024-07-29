function fontSize() {
  let block = document.querySelector('#showing_time');
  let totalHeight = block.offsetHeight;
  // console.log(totalHeight);
  let arrDigitalTime = document.querySelectorAll('.digital-time');
  arrDigitalTime.forEach((digitalTime) => {
    digitalTime.style.fontSize = totalHeight*0.8 + "px";
  });
};

export { fontSize };