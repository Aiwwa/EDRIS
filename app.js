// localStorage.clear()
document.addEventListener('DOMContentLoaded', () => {
  const TITLES_KEY = 'titles';
  const titles = localStorage.getItem(TITLES_KEY) ? JSON.parse(localStorage.getItem(TITLES_KEY)) : [];

  const addBtn = document.querySelector('#add-dish');
  const nameInput = document.querySelector('#name-input');
  const mainList = document.querySelector('.dishes-list');

  addBtn.addEventListener('click', () => {
    createDishList();
  })

  function createDishList() {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    title.innerText = nameInput.value; //This element value will go to local storage
    const list = document.createElement('ul');

    const addItems = document.createElement('p');
    addItems.innerText = 'Add items';

    const input = document.createElement('input');
    const btn = document.createElement('button');
    btn.innerText = 'Add';

    div.appendChild(title);
    div.appendChild(list);
    div.appendChild(addItems);
    addItems.appendChild(input);
    addItems.appendChild(btn);
    mainList.appendChild(div);

    titles.push(title.innerText);

    localStorage.setItem(TITLES_KEY, JSON.stringify(titles));
  }


})



















