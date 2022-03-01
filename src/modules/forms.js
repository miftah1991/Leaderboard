import addLeader from './addLeader.js';

const formData = (e) => {
  e.preventDefault();

  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  if (name !== '' && score !== '') {
    document.querySelector('.validate-error').style.display = 'none';
    addLeader(name, score);
  } else {
    document.querySelector('.validate-error').style.display = 'block';
  }
};

export default formData;