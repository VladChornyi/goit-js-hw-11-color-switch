import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const bodyNode = document.querySelector('body');

const startBtnNode = document.querySelector('button[data-action="start"]');

const stopBtnNode = document.querySelector('button[data-action="stop"]');

const itervalLength = 1000;

let isOnChange = false;

let changeBcgByInterval;

startBtnNode.addEventListener('click', e => {
  if (!isOnChange)
    changeBcgByInterval = setInterval(() => {
      bodyNode.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, itervalLength);
  isOnChange = true;
});

stopBtnNode.addEventListener('click', e => {
  clearInterval(changeBcgByInterval);
  isOnChange = false;
});
