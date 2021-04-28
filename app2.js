const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
const dishesList = document.querySelector('.single-dish-list');

const DISHES_STORAGE_KEY = 'dishes';
let dishesArr = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];


document.addEventListener('DOMContentLoaded', () => {
  drawDishesToUI();
  removeDish();
});


addBtn.addEventListener('click', () => {
  dishesArr.push(`${dishNameInput.value}`);
  dishNameInput.value = '';
  localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishesArr));
  drawDishesToUI();
})

function drawDishesToUI() {
  const dishName = document.getElementById("dish-name") || document.createElement("div");
  dishName.innerHTML = null;
  dishName.id = "dish-name";

  dishesArr.forEach(dishItem => {
    const nameDiv = document.createElement('div');
    const name = document.createElement('h4');
    name.textContent = `${dishItem}`;

    const remove = document.createElement('i');
    remove.classList.add('fas', 'fa-trash-alt', 'remove');

    name.appendChild(remove);
    nameDiv.appendChild(name);
    dishName.appendChild(nameDiv);

  });

  dishesContainer.appendChild(dishName);
}

function removeDish() {
  document.querySelectorAll('.fa-trash-alt').forEach((iconEl, index) => {
    iconEl.addEventListener('click', () => {
      dishesArr.splice(`${index}`, 1);
      localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishesArr));
      document.querySelectorAll('#dish-name div').forEach((el, idx) => {
        if (idx === index) {
          el.remove();
        }
      })
    })
  })
}


function createDishCard() {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = 'sukuriau';

  div.appendChild(p);
  dishesList.appendChild(div);
}








