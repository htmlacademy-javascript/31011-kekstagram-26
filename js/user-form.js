import { checkStringLength } from './util.js';

const form = document.querySelector('#upload-select-image');
const inputHashtags = form.querySelector('.text__hashtags');
const inputComment = form.querySelector('.text__description');

const comment = inputComment.textContent;

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  function isValidHashtag(hashtag) {
    if (hashtag[0] === '#' && checkStringLength(hashtag, 20, 2)) {
      return true;
    }
    return false;
  }

  const hashtags = inputHashtags.value.toLowerCase().split(' ');
  const isValidHashtags = hashtags.every(isValidHashtag);

  const isValid = pristine.validate();

  if (isValid && checkStringLength(comment, 140) && isValidHashtags) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма не валидна');
  }
});
