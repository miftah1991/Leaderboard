import { postData } from './leaders.js';

const addLeader = (name, score) => {
  const elementArray = { user: name, score };
  postData(elementArray);
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default addLeader;