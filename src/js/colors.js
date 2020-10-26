// Массив цветов в hex-формате
const colors = [
  '#FF5668',
  '#FFFFFF',
  '#2196F3',
  '#FFC0CB',
  '#4CAF50',
  '#FF9800',
  '#FF69B4',
  '#4169E1',
  '#808000',
  '#009688',
  '#795548',
  '#00FFFF',
  '#FFFF00',
  '#008000',
  '#FF00FF',
  '#800080',
  '#00FF00',
  '#FFA07A',
  '#C7A1BA',
  '#D2B29B',
  '#00CBA3',
];

const CHANGE_COLORS_DELAY = 1000;
let timeoutId = null;
let isActive = false;
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

refs.stop.disabled = true;

// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

function onStartClick() {
  if (isActive) {
    return;
  }
  timeoutId = setInterval(addBgColor, CHANGE_COLORS_DELAY);
  isActive = true;
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopClick() {
  clearTimeout(timeoutId);
  isActive = false;
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function addBgColor() {
  refs.body.style.cssText = `background-color: ${newColor()}`;
}

function newColor() {
  const idxColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[idxColor];
}


