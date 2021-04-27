const DISHES_STORAGE_KEY = 'dishes';
let dishes = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];
let dishCardTitle;

const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
const dishesList = document.querySelector('.single-dish-list');

let LIST_ITEMS_KEY = 'DINAMINIS';
let dishProductsList = localStorage.getItem(LIST_ITEMS_KEY) ? JSON.parse(localStorage.getItem(LIST_ITEMS_KEY)) : [];
// let listItems;

const editContainer = document.querySelector('.edit-output');
const editInput = document.querySelector('.edit-output input');
const editInputSave = document.querySelector('.edit-output button');

//Events
document.addEventListener('DOMContentLoaded', () => {

  createDishCardToUI();
  editDishTitle();
  removeDish();


})

dishNameInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if ((e.keyCode === 13)) {
    addBtn.click();
  }
});

addBtn.addEventListener('click', () => {
  createDishCardTitle();
  localStorage.setItem(`${DISHES_STORAGE_KEY}`, JSON.stringify(dishes));
  location.reload();
});


//Functions
function createDishCardTitle() {
  dishes.push(`${dishNameInput.value}`);
  dishNameInput.value = '';
}

function createDishCardToUI() {
  dishes.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('style');
    const p = document.createElement('p');
    p.classList.add('d-inline');

    const i = document.createElement('i');
    i.classList.add('fas', 'fa-pen', 'edit');
    const remove = document.createElement('i');
    remove.classList.add('fas', 'fa-trash-alt', 'remove');

    div.appendChild(p);
    div.appendChild(i);
    div.appendChild(remove);

    dishCardTitle = p.textContent = element;
    p.textContent = element;

    dishesContainer.appendChild(div);
    createListElement();

  });
}

function editDishTitle() {
  document.querySelectorAll('.style .edit').forEach((el, idx) => {
    el.addEventListener('click', (event) => {
      dishes.forEach((_dish, index) => {
        if (idx === index) {
          editContainer.classList.add('d-block')
          if (event) {
            editInput.addEventListener('keyup', (e) => {
              e.preventDefault();
              if ((e.keyCode === 13)) {
                editInputSave.click();
              }
            });
            editInputSave.addEventListener('click', () => {
              location.reload();
              dishes[index] = editInput.value;
              localStorage.setItem('dishes', JSON.stringify(dishes));
            });
          }
        }
      });
    });
  });
}

function removeDish() {
  document.querySelectorAll('.style .remove').forEach((el, idx) => {
    el.addEventListener('click', () => {
      dishes.forEach((_dish, index) => {
        if (idx === index) {
          el.parentElement.remove();
          dishes.splice(`${idx}`, 1);
          localStorage.setItem('dishes', JSON.stringify(dishes));
          location.reload();
        }
      });
    });
  });
}

function createListElement() {
  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const title = document.createElement('h4');
  title.textContent = `${dishCardTitle}`;
  const div = document.createElement('div');
  div.classList.add('add-item');

  const listDiv = document.createElement('div');
  listDiv.classList.add('list-item-div');
  const input = document.createElement('input');
  const add = document.createElement('button');
  add.textContent = 'Add item to list';

  listDiv.appendChild(input);
  listDiv.appendChild(add);

  listContainer.appendChild(title);
  listContainer.appendChild(div);
  listContainer.appendChild(listDiv);

  dishesList.appendChild(listContainer);
}



// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// -----------------------------------------------------    

// let LIST_ITEMS_KEY;
// let dishProductsList = localStorage.getItem(LIST_ITEMS_KEY) ? JSON.parse(localStorage.getItem(LIST_ITEMS_KEY)) : [];

//DOM loaded
let btnIdx;
function addListToDish() {
  console.log('hey')
  document.querySelectorAll('.list-item-div button').forEach((addButton, idx) => {
    addButton.addEventListener('click', () => {
      document.querySelectorAll('.list-item-div').forEach((el, index) => {
        if (index === idx) {
          btnIdx = idx;

          // localStorage.setItem(LIST_ITEMS_KEY, JSON.stringify(dishProductsList))
        }
      })
    });
  })
}





















