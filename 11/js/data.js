import {getRandomPositiveInteger} from './util.js';

const DESCRIPTIONS = [
  'Мой отдых!',
  'В поезде.',
  'На море!',
  'Моя работа.',
  'Семья!',
  'Так я провожу вечер =)',
  'Се-ля-ви',
  'Продаю комод.',
  'Ищу работу.',
  'Мяу!',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Анатолий',
  'Михаил',
  'Ирина',
  'Мария',
  'Алексей',
  'Ева',
  'Владислав',
  'Евгений',
];

const PHOTOS_MAX_COUNT = 25;
const COMMENTS_MAX_COUNT = 6;
const MESSAGES_MAX_COUNT = 2;

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

let photoId = 0;
let commentId = 0;

function createCommentMessage() {
  const messageCount = getRandomPositiveInteger(1, MESSAGES_MAX_COUNT);
  let message = '';
  for (let i = 0; i < messageCount; i++){
    message = `${message} ${getRandomArrayElement(MESSAGES)}`;
  }
  return message;
}

function createComment() {
  commentId++;
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    messages: createCommentMessage(),
    name: getRandomArrayElement(NAMES),
  };
}

function createPhoto() {
  photoId++;
  const commentsCount = getRandomPositiveInteger(1, COMMENTS_MAX_COUNT);
  const comments = Array.from({length: commentsCount}, createComment);
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: comments,
  };
}

function getPhotos() {
  return Array.from({length: PHOTOS_MAX_COUNT}, createPhoto);
}

export {getPhotos};
