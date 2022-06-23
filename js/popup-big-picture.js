import {createBigPicture} from './create-big-picture.js';
import {createComments} from './create-comments.js';
import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const commentCountContainer = bigPictureContainer.querySelector('.social__comment-count');
const commentLoaderContainer = bigPictureContainer.querySelector('.comments-loader');
const buttonCloseBigPicture = bigPictureContainer.querySelector('#picture-cancel');
const body = document.querySelector('body');

function onPopupEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function closeBigPicture() {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
}

function openBigPicture(dataPicture) {
  bigPictureContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeyDown);
  buttonCloseBigPicture.addEventListener('click', () => {
    closeBigPicture();
  });
  commentCountContainer.classList.add('hidden');
  commentLoaderContainer.classList.add('hidden');

  createBigPicture(dataPicture);
  createComments(dataPicture['comments']);
}

export {openBigPicture};
