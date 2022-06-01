// Функция взята тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom (min, max) {
  if (min < max && min >= 0 && max > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

function isValidLength (string, maxLength) {
  if (string.length >= maxLength) {
    return true;
  }
  return false;
}

