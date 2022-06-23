import {isEscapeKey} from './util.js';

function initUploadForm() {
  const inputUploadFile = document.querySelector('#upload-file');
  const editPhotoConteiner = document.querySelector('.img-upload__overlay');
  const buttonCloseEditPicture = editPhotoConteiner.querySelector('#upload-cancel');
  const body = document.querySelector('body');

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

  function onPopupEscKeyDown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeEditPicture();
    }
  }

  function closeEditPicture() {
    const scaleControl = editPhotoConteiner.querySelector('.scale__control');
    const hashtagsInput = editPhotoConteiner.querySelector('.text__hashtags');
    const descriptionTextarea = editPhotoConteiner.querySelector('.text__description');

    editPhotoConteiner.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeyDown);
    inputUploadFile.value = '';
    scaleControl.value = '55%';
    hashtagsInput.value = '';
    descriptionTextarea.textContent = '';
  }

  changePicture();
}

export {initUploadForm};
