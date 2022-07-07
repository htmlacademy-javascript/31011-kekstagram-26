import {createPictures} from './create-pictures.js';
import {shuffle, debounce} from './util.js';

const RENDER_DELAY = 500;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function initFilters(pictures) {
  const defaultFilterPhotos = getDefaultFilterPhotos(pictures);
  const randomFilterPhotos = getRandomFilterPhotos(pictures);
  const discussedFilterPhotos = getDiscussedFilterPhotos(pictures);

  const filtersElement = document.querySelector('.img-filters');
  filtersElement.classList.remove('img-filters--inactive');

  filterDefault.addEventListener('click', (evt) => {
    setFilter(evt, filterDefault, defaultFilterPhotos);
  });

  filterRandom.addEventListener('click', (evt) => {
    setFilter(evt, filterRandom, randomFilterPhotos);
  });

  filterDiscussed.addEventListener('click', (evt) => {
    setFilter(evt, filterDiscussed, discussedFilterPhotos);
  });

  setFilter(null, filterDefault, defaultFilterPhotos);
}

function setFilter(evt, currentFilter, currentPictures) {
  if (evt) {
    evt.preventDefault();
  }
  const previousFilter = document.querySelector('.img-filters__button--active');
  previousFilter.classList.remove('img-filters__button--active');
  currentFilter.classList.add('img-filters__button--active');
  debounce(
    () => createPictures(currentPictures),
    RENDER_DELAY,
  );
}

function getDefaultFilterPhotos(array) {
  return array
    .slice()
    .sort((photoA, photoB) => photoA.id - photoB.id);
}

function getRandomFilterPhotos(array) {
  return shuffle(array.slice()).slice(0, 10);
}

function getDiscussedFilterPhotos(array) {
  return array
    .slice()
    .sort((photoA, photoB) => photoB.likes - photoA.likes);
}

export {initFilters};
