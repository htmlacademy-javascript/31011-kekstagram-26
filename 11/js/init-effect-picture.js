function initEffectPicture() {
  const sliderEffect = document.querySelector('.effect-level__slider');
  const sliderEffectContainer = document.querySelector('.img-upload__effect-level');
  const selectButtons = document.querySelectorAll('.effects__radio');
  const uploadPicture = document.querySelector('.img-upload__preview img');
  const levelEffect = document.querySelector('.effect-level__value');

  sliderEffectContainer.classList.add('hidden');

  noUiSlider.create(sliderEffect, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  selectButtons.forEach((selectButton) => {
    selectButton.addEventListener('change', () => {
      if (selectButton.checked) {
        if (selectButton.value !== 'none') {
          sliderEffectContainer.classList.remove('hidden');
        } else {
          sliderEffectContainer.classList.add('hidden');
        }
        switch(selectButton.value) {
          case 'chrome': {
            sliderEffect.noUiSlider.on('update', () => {
              levelEffect.value = sliderEffect.noUiSlider.get();
              uploadPicture.style.filter = `grayscale(${levelEffect.value})`;
            });
            sliderEffect.noUiSlider.updateOptions({
              range: {
                min: 0,
                max: 1,
              },
              step: 0.1,
              start: 1,
            });
            uploadPicture.classList='';
            uploadPicture.classList.add('effects__preview--chrome');
          }
            break;
          case 'sepia': {
            sliderEffect.noUiSlider.on('update', () => {
              levelEffect.value = sliderEffect.noUiSlider.get();
              uploadPicture.style.filter = `sepia(${levelEffect.value})`;
            });
            sliderEffect.noUiSlider.updateOptions({
              range: {
                min: 0,
                max: 1,
              },
              step: 0.1,
              start: 1,
            });
            uploadPicture.classList='';
            uploadPicture.classList.add('effects__preview--sepia');
          }
            break;
          case 'marvin': {
            sliderEffect.noUiSlider.on('update', () => {
              levelEffect.value = sliderEffect.noUiSlider.get();
              uploadPicture.style.filter = `invert(${levelEffect.value}%)`;
            });
            sliderEffect.noUiSlider.updateOptions({
              range: {
                min: 0,
                max: 100,
              },
              step: 1,
              start: 100,
            });
            uploadPicture.classList='';
            uploadPicture.classList.add('effects__preview--invert');
          }
            break;
          case 'phobos': {
            sliderEffect.noUiSlider.on('update', () => {
              levelEffect.value = sliderEffect.noUiSlider.get();
              uploadPicture.style.filter = `blur(${levelEffect.value}px)`;
            });
            sliderEffect.noUiSlider.updateOptions({
              range: {
                min: 0,
                max: 3,
              },
              step: 0.1,
              start: 3,
            });
            uploadPicture.classList='';
            uploadPicture.classList.add('effects__preview--blur');
          }
            break;
          case 'heat': {
            sliderEffect.noUiSlider.on('update', () => {
              levelEffect.value = sliderEffect.noUiSlider.get();
              uploadPicture.style.filter = `brightness(${levelEffect.value})`;
            });
            sliderEffect.noUiSlider.updateOptions({
              range: {
                min: 1,
                max: 3,
              },
              step: 0.1,
              start: 3,
            });
            uploadPicture.classList='';
            uploadPicture.classList.add('effects__preview--brightness');
          }
            break;
          default: {
            uploadPicture.style.filter = '';
            uploadPicture.classList='';
          }
        }
      }
    });
  });

}

export {initEffectPicture};
