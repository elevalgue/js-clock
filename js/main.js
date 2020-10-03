'use strict';

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  //seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.getElementsByClassName.transform = `rotate(${secondsDegrees}deg)`;

  console.log(seconds);

  //minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.getElementsByClassName.transform = `rotate(${minutesDegrees}deg)`;

  console.log(minutes);

  //hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.getElementsByClassName.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hourHand);
}

setInterval(setDate, 1000);
setDate();
