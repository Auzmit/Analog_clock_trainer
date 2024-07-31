function shadowedOnlyOne(btnClockChanger) {
  const allBtnClockChanger = btnClockChanger
    .parentNode.getElementsByClassName('btn_clock-changer');
  for (let i = 0; i < allBtnClockChanger.length; i++) {
    const iBtnClockChanger = allBtnClockChanger[i];
    // eslint-disable-next-line operator-linebreak
    iBtnClockChanger.style.boxShadow =
      'rgba(0, 0, 0, 0.4) 0px 5px 8px 3px';
    console.log(btnClockChanger.style.boxShadow);
    iBtnClockChanger.style.pointerEvents = 'none';
    setTimeout(() => {
      iBtnClockChanger.style.pointerEvents = 'auto';
    }, 600);
  }
  // eslint-disable-next-line operator-linebreak
  btnClockChanger.style.boxShadow =
    'rgba(0, 0, 0, 0.6) 0px 5px 8px 3px, inset rgba(0, 0, 0, 0.6) 0px 0px 3px 3px';
}

function clockChange() {
  for (let i = 1; i <= 4; i++) {
    const btnClockChanger = document
      .querySelector(`#clock-change .btn_clock-changer:nth-child(${i})`);
    btnClockChanger.addEventListener('click', (event) => {
      shadowedOnlyOne(btnClockChanger);

      let btnText = '';
      if (event.target.className === 'btn_clock-changer') {
        btnText = event.target.getElementsByClassName('clock-changer_text')[0].textContent;
      } else {
        btnText = event.target.textContent;
      }

      const clock = document.getElementById('clock');
      let clockBackgroundName = '';
      switch (btnText) {
        case 'EASY':
          clockBackgroundName = 'simple';
          break;
        case 'MEDIUM':
          clockBackgroundName = 'hard';
          break;
        case 'HARD':
          clockBackgroundName = 'very-hard';
          break;
        case 'TOUGH':
          clockBackgroundName = 'very-very-hard';
          break;
        default:
          break;
      }

      // eslint-disable-next-line operator-linebreak
      clock.style.background =
        `url(src/images/watch-face_svg/watch-face_no-dot/watch-face_${clockBackgroundName}.svg)`;
      clock.style.backgroundSize = '100%';
      // clock.style.transition = '.2s';
      // console.log(clock.style.background);
      // console.log(text);
    });
  }
}

export { clockChange };
