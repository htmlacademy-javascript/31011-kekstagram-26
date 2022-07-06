import {createPictures} from './create-pictures.js';
import {initUploadForm, closeEditPicture} from './init-upload-form.js';
import {setUserFormSubmit} from './validate-upload-form.js';
import {initScalePicture} from './init-scale-picture.js';
import {initEffectPicture} from './init-effect-picture.js';
import {getData} from './api.js';
import {viewFilters, setDefaultFilter, setRandomFilter, setDiscussedFilter, defaultFilterPhotos, randomFilterPhotos, discussedFilterPhotos} from './init-filters.js';
import {debounce} from './util.js';

const RENDER_DELAY = 500;

getData((pictures) => {
  createPictures(pictures, defaultFilterPhotos);
  viewFilters();
  setDefaultFilter(debounce(
    () => createPictures(pictures, defaultFilterPhotos),
    RENDER_DELAY,
  ));
  setRandomFilter(debounce(
    () => createPictures(pictures, randomFilterPhotos),
    RENDER_DELAY,
  ));
  setDiscussedFilter(debounce(
    () => createPictures(pictures, discussedFilterPhotos),
    RENDER_DELAY,
  ));
});

initUploadForm();
setUserFormSubmit(closeEditPicture);
initScalePicture();
initEffectPicture();
