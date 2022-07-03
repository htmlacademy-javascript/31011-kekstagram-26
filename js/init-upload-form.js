import {isEscapeKey} from './util.js';

const inputUploadFile = document.querySelector('#upload-file');
const editPhotoConteiner = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

function closeEditPicture() {
  const scaleControl = editPhotoConteiner.querySelector('.scale__control--value');
  const hashtagsInput = editPhotoConteiner.querySelector('.text__hashtags');
  const descriptionTextarea = document.querySelector('.text__description');
  const uploadPicture = document.querySelector('.img-upload__preview img');
  const selectButton = document.querySelector('.effects__radio');
  const sliderEffectContainer = document.querySelector('.img-upload__effect-level');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  inputUploadFile.value = '';
  scaleControl.value = '100%';
  uploadPicture.style.transform = 'scale(1)';
  selectButton.checked = true;
  uploadPicture.classList='';
  uploadPicture.style.filter = '';
  sliderEffectContainer.classList.add('hidden');
  hashtagsInput.value = '';
  descriptionTextarea.value = '';
  editPhotoConteiner.classList.add('hidden');
}

function onPopupEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditPicture();
  }
}

function initUploadForm() {
  const buttonCloseEditPicture = editPhotoConteiner.querySelector('#upload-cancel');

  function changePicture() {
    inputUploadFile.addEventListener('change', () => {
      editPhotoConteiner.classList.remove('hidden');
      body.classList.add('modal-open');
      document.addEventListener('keydown', onPopupEscKeyDown);
      buttonCloseEditPicture.addEventListener('click', () => {
        closeEditPicture();
      });
    });
  }

  changePicture();
}

export {initUploadForm, closeEditPicture};
