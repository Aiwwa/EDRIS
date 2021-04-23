const DISHES_STORAGE_KEY = 'dishes';
// const EDITED
let dishes = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];

const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
let dishName;


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
  // Element is value form 25line dishes.push(`${dishName}`)
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
    div.appendChild(remove)
    p.textContent = element;

    dishesContainer.appendChild(div)
  });
}

function editDishTitle() {
  document.querySelectorAll('.style .edit').forEach((el, idx) => {
    el.addEventListener('click', () => {
      dishes.forEach((dish, index) => {
        if (idx === index) {
          dishes[index] = '';
          location.reload();
          localStorage.setItem('dishes', JSON.stringify(dishes));
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

          console.log(dishes[index])
          // localStorage.removeItem('dishes', JSON.stringify(dishes))


          // localStorage.setItem('dishes', JSON.stringify(dishes));

          // location.reload();
        }
      })
    });
  })
}







