import getData from './generateLeaders.js';

const dataURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6uj0uqnZpshKtXlAZwzJ/scores';

const getAPIData = async () => {
  const response = await (await fetch(dataURL)).json();
  getData(response);
};
const postData = async (data) => {
  await fetch(dataURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then((data) => {
      const elem = document.getElementById('responseMessage');
      document.querySelector('.validate-error').style.display = 'block';
      elem.classList.remove('validate-error');
      elem.classList.add('success-message');
      elem.innerHTML = data.result;
      setTimeout(() => {
        document.getElementById('responseMessage').style.display = 'none';
      }, 1000);
    });
};

export { getAPIData, postData };