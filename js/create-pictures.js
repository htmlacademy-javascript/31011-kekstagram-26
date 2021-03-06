import {openBigPicture} from './popup-big-picture.js';

function createPictures(photosData) {
  const photoTemplate = document.querySelector('#picture').content;
  const photosContainer = document.querySelector('.pictures');
  const photoListFragment = document.createDocumentFragment();

  photosData.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoListFragment.append(photoElement);
  });

  const viewPictures = document.querySelectorAll('a.picture');
  viewPictures.forEach((picture) => {
    picture.remove();
  });

  photosContainer.append(photoListFragment);
  const previews = photosContainer.querySelectorAll('.picture');

  function initBigPicture(item, dataPicture) {
    item.addEventListener('click', () => {
      openBigPicture(dataPicture);
    });
  }

  for (let i = 0; i < photosData.length; i++) {
    initBigPicture(previews[i], photosData[i]);
  }
}

export {createPictures};
