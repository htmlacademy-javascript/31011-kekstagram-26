function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength ("текст", 140);

const DESCRIPTION = [
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

const SIMULAR_PHOTOS_COUNT = 25;
const MAX_COUNT_COMMENTS = 6;
const MAX_COUNT_MESSAGES = 2;

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}
let idPhoto = 0;
let idComment = 0;

const getIdPhoto = () => {
  idPhoto++;
  return idPhoto;
}

const getIdComment = () => {
  idComment++;
  return idComment;
}

const createMessageComment = () => {
  const MESSAGE_COUNT = getRandomPositiveInteger(1, MAX_COUNT_MESSAGES);
  let message = '';
  for (let i = 1; i <= MESSAGE_COUNT; i++){
    message = message + ' ' + getRandomArrayElement(MESSAGES);
  }
  return message;
}

const createComment = () => {
  return {
    id: getIdComment(),
    avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
    messages: createMessageComment(),
    name: getRandomArrayElement(NAMES),
  }
}

const createPhoto = () => {
  id = getIdPhoto();
  commentsCount = getRandomPositiveInteger(1, MAX_COUNT_COMMENTS);
  const simularComments = Array.from({length: commentsCount}, createComment);
  return {
    id: id, // число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
    url: 'photos/' + id + '.jpg', // строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: simularComments,
  };
};

const simularPhotos = Array.from({length: SIMULAR_PHOTOS_COUNT}, createPhoto);
