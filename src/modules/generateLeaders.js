const getData = (data) => {
  const container = document.getElementById('leader-lis');
  container.innerHTML = '';
  if (data != null) {
    const newArray = data.result.sort((a, b) => (Number((a.score) > Number(b.score)) ? -1 : 1));
    newArray.forEach((element, index) => {
      const li = document.createElement('li');
      li.className = 'elements';
      const titleDiv = document.createElement('div');
      titleDiv.className = 'leader-title';
      titleDiv.textContent = `${element.user} - ${element.score}`;
      li.appendChild(titleDiv);
      container.append(li);
      if (index % 2 !== 0) {
        li.classList.add('grey-background');
      }
    });
  }
};

export default getData;