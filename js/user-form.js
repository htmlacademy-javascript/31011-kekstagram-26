import {checkStringLength, isNotDuplicates, isEscapeKey} from './util.js';

const form = document.querySelector('#upload-select-image');
const inputHashtags = form.querySelector('.text__hashtags');
const inputComment = form.querySelector('.text__description');

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAGS = 5;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(form);

function stopPropagationKeydownEsc(evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

inputHashtags.addEventListener('keydown', stopPropagationKeydownEsc);
inputComment.addEventListener('keydown', stopPropagationKeydownEsc);

form.addEventListener('submit', (evt) => {
  const comment = inputComment.value;
  const hashtags = inputHashtags.value.toLowerCase().trim().split(' ');

  function isValidComment() {
    return !checkStringLength(comment, MAX_COMMENT_LENGTH);
  }

  function isValidHashtag(hashtag) {
    return hashtag[0] === '#' && checkStringLength(hashtag, MAX_HASHTAG_LENGTH, MIN_HASHTAG_LENGTH) && HASHTAG_VALID_REGEX.test(hashtag);
  }

  function isValidHashtags() {
    if (inputHashtags.value.length === 0) {
      return false;
    }
    return !(hashtags.every(isValidHashtag) && hashtags.length <= MAX_HASHTAGS && isNotDuplicates(hashtags));
  }

  const isValid = pristine.validate();

  if (!isValid || isValidComment() || isValidHashtags()) {
    evt.preventDefault();
  }
});
