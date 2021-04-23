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

    div.appendChild(p);
    p.textContent = element;

    dishesContainer.appendChild(div)
  });
}


function editDishTitle() {
  document.querySelectorAll('.dishes-container div p').forEach((el, idx) => {
    el.addEventListener('click', () => {
      dishes.forEach((dish, index) => {
        if (idx === index) {
          dishes[index] = 'dsc';
          localStorage.setItem('dishes', JSON.stringify(dishes));
        }
      })
    });
  })
}





