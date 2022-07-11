const API_LINK = 'https://26.javascript.pages.academy/kekstagram';

function getData(onSuccess) {
  fetch(`${API_LINK}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    });
}

function sendData(onSuccess, onFail, body) {

  fetch(
    API_LINK,
    {
      method: 'POST',
      body: body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Данные не валидны.');
      }
    })
    .catch((err) => {
      onFail(err.message);
    });
}

export {getData, sendData};
