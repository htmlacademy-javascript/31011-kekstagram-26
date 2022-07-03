import {sendData} from './api.js';
import {checkStringLength, isNotDuplicates, isEscapeKey, showSuccessMessage, showErrorMessage} from './util.js';

const form = document.querySelector('#upload-select-image');
const submitButton = form.querySelector('.img-upload__submit');
const inputHashtags = form.querySelector('.text__hashtags');
const inputComment = form.querySelector('.text__description');
const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
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

function isValidComment(comment) {
  return checkStringLength(comment, MAX_COMMENT_LENGTH);
}

function isValidHashtag(hashtag) {
  return hashtag[0] === '#'
    && checkStringLength(hashtag, MAX_HASHTAG_LENGTH, MIN_HASHTAG_LENGTH)
    && HASHTAG_VALID_REGEX.test(hashtag);
}

function isValidHashtags(hashtags) {
  if (inputHashtags.value.length === 0) {
    return true;
  }
  return hashtags.every(isValidHashtag)
    && hashtags.length <= MAX_HASHTAGS
    && isNotDuplicates(hashtags);
}

function blockSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'СОХРАНЯЮ...';
}

function unblockSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
}

function setUserFormSubmit(onSuccess) {
  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    const comment = inputComment.value;
    const hashtags = inputHashtags.value.toLowerCase().trim().split(' ');

    evt.preventDefault();
    if (isValid && isValidComment(comment) && isValidHashtags(hashtags)) {
      const formData = new FormData(evt.target);
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        formData
      );
    }
  });
}

export {setUserFormSubmit};
