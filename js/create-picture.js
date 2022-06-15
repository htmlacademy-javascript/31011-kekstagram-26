import {getPhotos} from './data.js';

const photoTemplate = document.querySelector('#picture').content;
const conteinerPhotos = document.querySelector('.pictures');

const photosData = getPhotos();

const photoListFragment = document.createDocumentFragment();

photosData.forEach((photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoListFragment.append(photoElement);
});
conteinerPhotos.append(photoListFragment);
