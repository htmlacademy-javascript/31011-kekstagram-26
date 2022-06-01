// Функция взята тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt (min, max) {
  if (min < max && min >= 0 && max > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new Error('Ошибка! Некорректные данные!');
  }
}

getRandomInt(20, 10);

function isValidLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

isValidLength('Тестовый текст', 140);
