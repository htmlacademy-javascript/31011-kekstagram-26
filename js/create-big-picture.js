const bigPictureContainer = document.querySelector('.big-picture');

function createBigPicture(dataPicture) {
  const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img img');
  const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
  const bigPictureComments = bigPictureContainer.querySelector('.comments-count');
  const bigPicttureDescription = bigPictureContainer.querySelector('.social__caption');

  bigPictureImg.src = dataPicture.url;
  bigPictureLikes.textContent = dataPicture.likes;
  bigPictureComments.textContent = dataPicture.comments.length;
  bigPicttureDescription.textContent = dataPicture.description;
}

export {createBigPicture};
