function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, maxLength, minLength = 0) {
  return (string.length <= maxLength && string.length >= minLength);
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function isNotDuplicates(items) {
  return !(items.some((item) => items.indexOf(item) !== items.lastIndexOf(item)));
}

function showSuccessMessage() {
  const bodyElement = document.querySelector('body');
  const successMessageTemplate = document.querySelector('#success').content;

  const messageElement = successMessageTemplate.cloneNode(true);
  bodyElement.append(messageElement);

  const lastElementChildBody = bodyElement.lastElementChild;
  const successButton = lastElementChildBody.querySelector('.success__button');
  const successInnerElement = lastElementChildBody.querySelector('.success__inner');
  successButton.addEventListener('click', () => {
    lastElementChildBody.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      lastElementChildBody.remove();
    }
  });
  document.addEventListener( 'click', (evt) => {
    if (evt.target !== successInnerElement){
      lastElementChildBody.remove();
    }
  });
}

function showErrorMessage() {
  const bodyElement = document.querySelector('body');
  const errorMessageTemplate = document.querySelector('#error').content;

  const messageElement = errorMessageTemplate.cloneNode(true);
  bodyElement.append(messageElement);

  const lastElementChildBody = bodyElement.lastElementChild;
  const errorButton = lastElementChildBody.querySelector('.error__button');
  const errorInnerElement = lastElementChildBody.querySelector('.error__inner');

  lastElementChildBody.style.zIndex = 100;

  errorButton.addEventListener('click', () => {
    lastElementChildBody.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      lastElementChildBody.remove();
    }
  });
  document.addEventListener( 'click', (evt) => {
    if (evt.target !== errorInnerElement){
      lastElementChildBody.remove();
    }
  });
}

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomPositiveInteger, checkStringLength, isEscapeKey, isNotDuplicates, showSuccessMessage, showErrorMessage, debounce, throttle};
