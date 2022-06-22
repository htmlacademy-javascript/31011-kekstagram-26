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

export {getRandomPositiveInteger, checkStringLength, isEscapeKey, isNotDuplicates};
