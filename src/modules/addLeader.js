import getData from './generateLeaders.js';
import Leaders from './leaders.js';

const addLeader = (name, score) => {
  const leader = new Leaders(name, score);
  Leaders.scores.push(leader);
  Leaders.saveLocalStorage();
  getData();
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default addLeader;