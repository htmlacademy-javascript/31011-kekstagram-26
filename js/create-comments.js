function createComments(dataComments) {
  const commentsContainer = document.querySelector('.social__comments');
  const commentListFragment = document.createDocumentFragment();
  commentsContainer.innerHTML = '';

  dataComments.forEach((comment) => {
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

export {createComments};
