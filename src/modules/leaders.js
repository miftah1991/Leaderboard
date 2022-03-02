import getData from './generateLeaders.js';

const dataURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6uj0uqnZpshKtXlAZwzJ/scores';
const getAPIData = () => {
  fetch(dataURL)
    .then((res) => res.json())
    .then((data) => {
      getData(data);
    });
};
const postData = (data) => {
  fetch(dataURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getAPIData, postData };