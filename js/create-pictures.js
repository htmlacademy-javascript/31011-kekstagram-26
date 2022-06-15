import {getPhotos} from './data.js';
import {createBigPicture} from './create-big-picture.js';

function createPictures() {
  const photoTemplate = document.querySelector('#picture').content;
  const photosContainer = document.querySelector('.pictures');
  const photosData = getPhotos();
  const photoListFragment = document.createDocumentFragment();

  photosData.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoListFragment.append(photoElement);
  });

  photosContainer.append(photoListFragment);
  const previews = photosContainer.querySelectorAll('.picture');

  function initBigPicture(item, dataPicture) {
    item.addEventListener('click', () => {
      const bigPictureContainer = document.querySelector('.big-picture');
      const body = document.querySelector('body');
      bigPictureContainer.classList.remove('hidden');
      body.classList.add('modal-open');
      createBigPicture(dataPicture);
    });
  }

  for (let i = 0; i < photosData.length; i++) {
    initBigPicture(previews[i], photosData[i]);
  }
}

export {createPictures};
