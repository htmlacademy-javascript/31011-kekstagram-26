import {createPictures} from './create-pictures.js';
import {initUploadForm, closeEditPicture} from './init-upload-form.js';
import {setUserFormSubmit} from './validate-upload-form.js';
import {initScalePicture} from './init-scale-picture.js';
import {initEffectPicture} from './init-effect-picture.js';
import {getData} from './api.js';

getData(createPictures);
initUploadForm();
setUserFormSubmit(closeEditPicture);
initScalePicture();
initEffectPicture();
