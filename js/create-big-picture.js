function createBigPicture(dataPicture) {
  const bigPictureContainer = document.querySelector('.big-picture');
  const commentCountContainer = bigPictureContainer.querySelector('.social__comment-count');
  const body = document.querySelector('body');
  const commentLoaderContainer = bigPictureContainer.querySelector('.comments-loader');
  const commentTemplate = document.querySelector('#comment').content;
  const commentsContainer = document.querySelector('.social__comments');
  const buttonCloseBigPicture = bigPictureContainer.querySelector('#picture-cancel');
  const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img img');
  const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
  const bigPictureComments = bigPictureContainer.querySelector('.comments-count');
  const bigPicttureDescription = bigPictureContainer.querySelector('.social__caption');
  const commentListFragment = document.createDocumentFragment();

  commentCountContainer.classList.add('hidden');
  commentLoaderContainer.classList.add('hidden');

  function hideBigPicture(){
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
  }

  bigPictureImg.src = dataPicture.url;
  bigPictureLikes.textContent = dataPicture.likes;
  bigPictureComments.textContent = dataPicture.comments.length;
  bigPicttureDescription.textContent = dataPicture.description;
  commentsContainer.innerHTML = '';

  dataPicture['comments'].forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__comment .social__picture');
    const commentMesssage = commentElement.querySelector('.social__comment .social__text');

    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMesssage.textContent = comment.messages;
    commentListFragment.append(commentElement);
  });

  commentsContainer.append(commentListFragment);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      hideBigPicture();
    }
  });

  buttonCloseBigPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    hideBigPicture();
  });

}

export {createBigPicture};
