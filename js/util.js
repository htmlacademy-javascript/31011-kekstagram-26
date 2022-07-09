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

function shuffle(array) {
  const copyArray = array.slice();
  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }
  return copyArray;
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomPositiveInteger, checkStringLength, isEscapeKey, isNotDuplicates, showSuccessMessage, showErrorMessage, shuffle, debounce, throttle};
