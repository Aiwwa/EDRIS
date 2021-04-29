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
  item.id = 'item'

  dishesArr.forEach(listItem => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const del = document.createElement('i');
    del.classList.add('fas', 'fa-minus-circle');
    li.innerText = `${listItem}`;

    div.appendChild(li);
    div.appendChild(del);
    item.appendChild(div)
  });

  dishesContainer.appendChild(item);
}

// Includes funtion for deleting form LS
function deletDishFromUI() {
  document.querySelectorAll('i').forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.remove();
      deleteDishFromLs(el.parentElement);
    })
  })
}

function deleteDishFromLs(item) {

  dishesArr.forEach((dishItem, index) => {
    if (item.innerText === dishItem) {
      // dishesArr.splice(index, 1);
      console.log(item.innerText)
    }
  });

  localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishesArr));
}




