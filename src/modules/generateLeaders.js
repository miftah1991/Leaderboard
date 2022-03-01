import Leaders from './leaders.js';

const getData = () => {
  const container = document.getElementById('leader-lis');
  container.innerHTML = '';
  if (localStorage.getItem('leaders') != null) {
    Leaders.scores = JSON.parse(localStorage.getItem('leaders'));
    Leaders.scores.forEach((element, index) => {
      const li = document.createElement('li');
      li.className = 'elements';
      const titleDiv = document.createElement('div');
      titleDiv.className = 'leader-title';
      titleDiv.textContent = `${element.name} - ${element.score}`;
      li.appendChild(titleDiv);
      container.append(li);
      if (index % 2 !== 0) {
        li.classList.add('grey-background');
      }
    });
  }
};

export default getData;