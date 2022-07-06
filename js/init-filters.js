import {shuffle} from './util.js';

function viewFilters() {
  const filterElement = document.querySelector('.img-filters');
  filterElement.classList.remove('img-filters--inactive');
}

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function setDefaultFilter(cb) {
  filterDefault.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    cb();
  });
}

function setRandomFilter(cb) {
  filterRandom.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    cb();
  });
}

function setDiscussedFilter(cb) {
  filterDiscussed.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.add('img-filters__button--active');
    cb();
  });
}

function defaultFilterPhotos(array) {
  return array.sort((photoA, photoB) => photoA.id - photoB.id);
}

function randomFilterPhotos(array) {
  return shuffle(array).slice(0, 10);
}

function discussedFilterPhotos(array) {
  return array.sort((photoA, photoB) => photoB.likes - photoA.likes);
}

export {viewFilters, setDefaultFilter, setRandomFilter, setDiscussedFilter, defaultFilterPhotos, randomFilterPhotos, discussedFilterPhotos};
