function createComments(dataComments) {
  const COUNT_VIEW_COMMENTS = 5;
  let countViewComments = COUNT_VIEW_COMMENTS;
  const commentsContainer = document.querySelector('.social__comments');
  const commentListFragment = document.createDocumentFragment();
  const bigPictureContainer = document.querySelector('.big-picture');
  const bigPictureComments = bigPictureContainer.querySelector('.comments-count');
  const commentViewContainer = bigPictureContainer.querySelector('.comments-view');
  const viewDataComments = dataComments.slice(0, countViewComments);
  const commentLoaderContainer = bigPictureContainer.querySelector('.comments-loader');
  const allCommentsCount = dataComments.length;
  commentsContainer.innerHTML = '';
  bigPictureComments.textContent = allCommentsCount;
  commentViewContainer.textContent = 0;

  function loadComments(dataLoadComments) {
    const viewCommentsCount = +commentViewContainer.textContent + dataLoadComments.length;
    commentViewContainer.textContent = viewCommentsCount;
    commentLoaderContainer.classList.remove('hidden');
    if (viewCommentsCount === allCommentsCount) {
      commentLoaderContainer.classList.add('hidden');
    }
    dataLoadComments.forEach((comment) => {
      const commentTemplate = document.querySelector('#comment').content;
      const commentElement = commentTemplate.cloneNode(true);
      const commentAvatar = commentElement.querySelector('.social__comment .social__picture');
      const commentMesssage = commentElement.querySelector('.social__comment .social__text');
      commentAvatar.src = comment.avatar;
      commentAvatar.alt = comment.name;
      commentMesssage.textContent = comment.messages;
      commentListFragment.append(commentElement);
    });
    commentsContainer.append(commentListFragment);
  }

  loadComments(viewDataComments);

  commentLoaderContainer.addEventListener('click', () => {
    const newCommentViewContainer = bigPictureContainer.querySelector('.comments-view');
    countViewComments += COUNT_VIEW_COMMENTS;
    loadComments(dataComments.slice(newCommentViewContainer.textContent, countViewComments));
  });

}

export {createComments};
