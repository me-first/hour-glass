"use strict";
const boxOne = document.querySelector(".box__one");
const boxOneCopy = document.querySelector(".box__one-copy");
const boxTwo = document.querySelector(".box__two");
const boxTwoCopy = document.querySelector(".box__two-copy");
const pipeOne = document.querySelector(".pipe__One");
const pipeTop = document.querySelector(".pipe__top");
const pipeBottom = document.querySelector(".pipe__bottom");
const watch = document.querySelector(".watch");
const body = document.querySelector("body");
const container = document.querySelector(".container");
console.log(watch);

let date;

let boxDown = 0;
let boxUp = 89;
let borderRadius = 50;
let i = 0;
let timer;
const sum = 89 / 60;
const fillUp = function () {
  boxDown = boxDown + 1;
  boxUp = boxUp - sum;
  borderRadius = borderRadius - 1.6666;

  if (boxDown >= 1) {
    pipeOne.style.backgroundColor = `#fcf4b6`;
    pipeTop.style.backgroundColor = `#fcf4b6`;
    pipeBottom.style.backgroundColor = `#fcf4b6`;
  }

  if (boxDown >= 1 && boxDown <= 30) {
    boxOneCopy.style.borderBottomLeftRadius = `${borderRadius}%`;
    boxOneCopy.style.borderBottomRightRadius = `${borderRadius}%`;
  }

  boxOneCopy.style.transform = `scaleY(${boxUp})`;
  boxTwoCopy.style.transform = `scaleY(${boxDown})`;
  pipeOne.style.width = `8%`;
  pipeBottom.style.width = `6%`;

  if (boxDown === 60) {
    i++;
    pipeOne.style.backgroundColor = `rgb(198 230 243)`;
    pipeTop.style.backgroundColor = `transparent`;
    pipeBottom.style.backgroundColor = `transparent`;

    container.style.transform = `rotate(${360 * i}deg)`;
    container.style.transition = `all 1s ease`;
    boxDown = 0;
    boxUp = 89;
    borderRadius = 50;
    clearInterval(timer);
    timer = setInterval(fillUp, 1000);
  }
};
setInterval(() => {
  date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hr = hr <= 9 ? `0${hr}` : hr;
  min = min <= 9 ? `0${min}` : min;
  sec = sec <= 9 ? `0${sec}` : sec;
  watch.textContent = `${hr}:${min}:${sec} PM`;

  // if (date.getSeconds() === 0 || date.getSeconds() <= 60) fillUp();
}, 1000);

timer = setInterval(fillUp, 1000);
