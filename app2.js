const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
const dishesList = document.querySelector('.single-dish-list');

const DISHES_STORAGE_KEY = 'dishes';
let dishesArr = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];


document.addEventListener('DOMContentLoaded', () => {
  drawListDishesToUI();
  deletDishFromUI();
});

addBtn.addEventListener('click', () => {
  dishesArr.push(`${dishNameInput.value}`);
  localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishesArr));
  dishNameInput.value = '';
  drawListDishesToUI();
  deletDishFromUI();
})

function drawListDishesToUI() {
  const item = document.getElementById('item') || document.createElement('div');
  item.innerHTML = null;
  item.id = 'item';

  dishesArr.forEach(listItem => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const del = document.createElement('i');
    del.classList.add('fas', 'fa-minus-circle');
    li.innerText = `${listItem}`;

    div.appendChild(li);
    div.appendChild(del);
    item.appendChild(div);
  });

  dishesContainer.appendChild(item);

  // Draws UI
  if (dishesArr.length !== 0) {
    createListElement();
  }
}

// Includes funtion for deleting form LS
function deletDishFromUI() {
  document.querySelectorAll('i').forEach((el, index) => {
    el.addEventListener('click', () => {
      el.parentElement.remove();
      deleteDishFromLs(el.parentElement);
    })
  });
}

function deleteDishFromLs(item) {
  dishesArr.forEach((dishItem, index) => {
    if (item.innerText === dishItem) {
      dishesArr.splice(index, 1);

      //Removes only from UI
      document.querySelectorAll('.list-container').forEach((el, idx) => {
        if (index === idx) {
          el.remove()
        }
      });

    }
  });

  localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishesArr));
}


//Just for UI
function createListElement() {

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const title = document.createElement('h4');
  title.innerText = `${dishNameInput.value}`
  const div = document.createElement('div');
  div.classList.add('add-item');

  const listDiv = document.createElement('div');
  listDiv.classList.add('list-item-div');
  const input = document.createElement('input');
  const add = document.createElement('button');
  add.textContent = 'Add item';

  const addToList = document.createElement('button');
  addToList.id = 'add-to-main-list';
  addToList.textContent = 'Add items to general list';

  listDiv.appendChild(input);
  listDiv.appendChild(add);

  listContainer.appendChild(title);
  listContainer.appendChild(div);
  listContainer.appendChild(listDiv);
  listContainer.appendChild(addToList);

  dishesList.appendChild(listContainer);
}