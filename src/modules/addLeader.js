import { postData, getAPIData } from './leaders.js';

const addLeader = (name, score) => {
  const elementArray = { user: name, score };
  postData(elementArray);
  //getAPIData();
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default addLeader;