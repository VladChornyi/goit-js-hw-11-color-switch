import './sass/main.scss';

const colors: string[] = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

type GetRandomNumber = (min: number, max: number) => number;

const randomIntegerFromInterval: GetRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const bodyNode = document.querySelector('body');

const startBtnNode: HTMLButtonElement = document.querySelector('button[data-action="start"]');

const stopBtnNode: HTMLButtonElement = document.querySelector('button[data-action="stop"]');

const itervalLength: number = 1000;

let isOnChange = false;

let changeBcgByInterval: NodeJS.Timer;

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
