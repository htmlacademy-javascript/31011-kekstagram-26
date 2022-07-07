function initScalePicture() {
  const controlSmaller = document.querySelector('.scale__control--smaller');
  const controlBigger = document.querySelector('.scale__control--bigger');
  const controlValue = document.querySelector('.scale__control--value');
  const uploadPicture = document.querySelector('.img-upload__preview img');

  controlValue.value = '100%';

  function clickControlSmaller() {
    switch (controlValue.value) {
      case '100%': {
        controlValue.value = '75%';
        uploadPicture.style.transform = 'scale(0.75)';
      }
        break;
      case '75%': {
        controlValue.value = '50%';
        uploadPicture.style.transform = 'scale(0.50)';
      }
        break;
      case '50%': {
        controlValue.value = '25%';
        uploadPicture.style.transform = 'scale(0.25)';
      }
        break;
    }
  }

  function clickControlBigger() {
    switch (controlValue.value) {
      case '25%': {
        controlValue.value = '50%';
        uploadPicture.style.transform = 'scale(0.50)';
      }
        break;
      case '50%': {
        controlValue.value = '75%';
        uploadPicture.style.transform = 'scale(0.75)';
      }
        break;
      case '75%': {
        controlValue.value = '100%';
        uploadPicture.style.transform = 'scale(1.00)';
      }
        break;
    }
  }

  controlSmaller.addEventListener('click', clickControlSmaller);
  controlBigger.addEventListener('click', clickControlBigger);


}

export {initScalePicture};
