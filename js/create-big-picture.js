function createBigPicture(dataPicture) {
  const bigPictureContainer = document.querySelector('.big-picture');

  const commentCountContainer = bigPictureContainer.querySelector('.social__comment-count');
  commentCountContainer.classList.add('hidden');

  const commentLoaderContainer = bigPictureContainer.querySelector('.comments-loader');
  commentLoaderContainer.classList.add('hidden');

  const body = document.querySelector('body');

  function hiddenBigPicture(){
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
  }

  bigPictureContainer
    .querySelector('.big-picture__img')
    .querySelector('img')
    .src = dataPicture.url;

  bigPictureContainer
    .querySelector('.likes-count')
    .textContent = dataPicture.likes;

  bigPictureContainer
    .querySelector('.comments-count')
    .textContent = dataPicture.comments.length;

  bigPictureContainer
    .querySelector('.social__caption')
    .textContent = dataPicture.description;

  const commentTemplate = document.querySelector('#comment').content;
  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = '';

  const commentListFragment = document.createDocumentFragment();

  dataPicture['comments'].forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement
      .querySelector('.social__comment')
      .querySelector('.social__picture')
      .src = comment.avatar;

    commentElement
      .querySelector('.social__comment')
      .querySelector('.social__picture')
      .alt = comment.name;

    commentElement
      .querySelector('.social__comment')
      .querySelector('.social__text')
      .textContent = comment.messages;

    commentListFragment.append(commentElement);
  });

  commentsContainer.append(commentListFragment);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      hiddenBigPicture();
    }
  });

  const buttonCloseBigPicture = bigPictureContainer.querySelector('#picture-cancel');

  buttonCloseBigPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    hiddenBigPicture();
  });

}

export {createBigPicture};
