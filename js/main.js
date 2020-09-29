'use strict';

const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  //seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.getElementsByClassName.transform = `rotate(${secondsDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000);
