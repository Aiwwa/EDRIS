const DISHES_STORAGE_KEY = 'dishes';
// const EDITED
let dishes = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];

const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
let dishName;

const editContainer = document.querySelector('.edit-output');
const editInput = document.querySelector('.edit-output input');
const editInputSave = document.querySelector('.edit-output button');


document.addEventListener('DOMContentLoaded', () => {
  createDishCardToUI();
  editDishTitle();
  removeDish();
})

addBtn.addEventListener('click', () => {
  createDishCardTitle();
  localStorage.setItem('dishes', JSON.stringify(dishes));
  location.reload();
})

function createDishCardTitle() {
  dishName = dishNameInput.value;
  dishNameInput.value = '';
  dishes.push(`${dishName}`);
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
    p.textContent = element;

    dishesContainer.appendChild(div)
  });
}

function editDishTitle() {
  document.querySelectorAll('.style .edit').forEach((el, idx) => {
    el.addEventListener('click', (event) => {
      dishes.forEach((dish, index) => {
        if (idx === index) {
          editContainer.classList.add('d-block')
          if (event) {
            editInputSave.addEventListener('click', () => {
              location.reload();
              dishes[index] = editInput.value;
              localStorage.setItem('dishes', JSON.stringify(dishes));
            });
          }
        }
      })
    });
  })
}


function removeDish() {
  document.querySelectorAll('.style .remove').forEach((el, idx) => {
    el.addEventListener('click', () => {
      dishes.forEach((dish, index) => {
        if (idx === index) {
          el.parentElement.remove();
          dishes.splice(`${idx}`, 1);
          localStorage.setItem('dishes', JSON.stringify(dishes));
          location.reload();
        }
      })
    });
  })
}


// function createEditElement() {
//   const field = document.querySelector('el.previousSibling')
//   const div = document.createElement('div');

//   const label = document.createElement('label');
//   label.setAttribute('for', 'edit-dish-name');
//   const input = document.createElement('input');
//   input.setAttribute('type', 'text');
//   const btn = document.createElement('button');
//   btn.setAttribute('type', 'button');

//   div.appendChild(label);
//   div.appendChild(input);
//   div.appendChild(btn);

//   field.appendChild(div)
// }










