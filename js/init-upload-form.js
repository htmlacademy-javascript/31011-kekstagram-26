import {isEscapeKey} from './util.js';

const inputUploadFile = document.querySelector('#upload-file');
const editPhotoContainer = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadPicture = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

function closeEditPicture() {
  const scaleControl = editPhotoContainer.querySelector('.scale__control--value');
  const hashtagsInput = editPhotoContainer.querySelector('.text__hashtags');
  const descriptionTextarea = document.querySelector('.text__description');
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
  editPhotoContainer.classList.add('hidden');
}

function onPopupEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditPicture();
  }
}

function initUploadForm() {
  const buttonCloseEditPicture = editPhotoContainer.querySelector('#upload-cancel');

  function changePicture() {
    inputUploadFile.addEventListener('change', () => {
      editPhotoContainer.classList.remove('hidden');

      body.classList.add('modal-open');
      document.addEventListener('keydown', onPopupEscKeyDown);
      buttonCloseEditPicture.addEventListener('click', () => {
        closeEditPicture();
      });
    });
  }

  inputUploadFile.addEventListener('change', () => {
    const file = inputUploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      uploadPicture.src = URL.createObjectURL(file);
    }
  });

  changePicture();
}

export {initUploadForm, closeEditPicture};
