const DISHES_STORAGE_KEY = 'dishes';
let dishes = localStorage.getItem(DISHES_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DISHES_STORAGE_KEY)) : [];


const addBtn = document.querySelector('#add-dish');
const dishNameInput = document.querySelector('#name-input');
const dishesContainer = document.querySelector('.dishes-container');
const dishesList = document.querySelector('.single-dish-list');
const mainList = document.querySelector('.main-list');
let dishCardTitle;
let arr = [];

// let chBoxes = document.querySelectorAll("input[type='checkbox']");
const editContainer = document.querySelector('.edit-output');
const editInput = document.querySelector('.edit-output input');
const editInputSave = document.querySelector('.edit-output button');

//Events
document.addEventListener('DOMContentLoaded', () => {
  createDishCardToUI();
  editDishTitle();
  removeDish();

  addItemToList();
  getDishListFromLs();
  chechBoxForListItems();

  generateFullList();

})

dishNameInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if ((e.keyCode === 13)) {
    addBtn.click();
  }
});

addBtn.addEventListener('click', () => {
  createDishCardTitle();
  localStorage.setItem('dishes', JSON.stringify(dishes));
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
          editContainer.classList.toggle('edit-mode');
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

function addItemToList() {
  document.querySelectorAll('.list-item-div button').forEach((addButton, idx) => {
    addButton.addEventListener('click', () => {

      dishes.forEach((dish, index) => {
        if (idx === index) {
          let list = document.querySelectorAll('.list-item-div > input').forEach((input, idx) => {
            if (idx === index) {
              dishProductsList = localStorage.getItem(`${dish}`) ? JSON.parse(localStorage.getItem(`${dish}`)) : [];
              dishProductsList.push(input.value);
              localStorage.setItem(`${dish}`, JSON.stringify(dishProductsList));
              location.reload();
            }
          });
        }
      });
    })
  })
}



function getDishListFromLs() {
  document.querySelectorAll('.list-container h4').forEach((title, index) => {
    document.querySelectorAll('.list-container .list-item-div').forEach((listDiv, idx) => {
      if (index === idx) {
        arr = JSON.parse(localStorage.getItem(`${title.innerText}`));
        if (arr) {
          arr.forEach((el, _idx) => {
            const listItemDiv = document.createElement('div');
            listItemDiv.classList.add('list-items');

            const li = document.createElement('li');
            li.textContent = `${el}`;

            const del = document.createElement('i');
            del.classList.add('fas', 'fa-minus-circle');

            listItemDiv.appendChild(li);
            listItemDiv.appendChild(del);

            listDiv.appendChild(listItemDiv);
          });
        } else {
          const firstText = document.createElement('p');
          firstText.innerText = 'List is empty';
          listDiv.appendChild(firstText);
        }
      }
    });
  });
}


function chechBoxForListItems() {
  const li = document.querySelectorAll('li').forEach(listItem => {
    const chBox = document.createElement('input');
    chBox.setAttribute('type', 'checkbox');
    chBox.setAttribute('value', '');
    listItem.appendChild(chBox);
  })
}

let generalListArr = [];

function generateFullList() {
  document.querySelectorAll('#add-to-main-list').forEach((el, index) => {
    el.addEventListener('click', () => {
      console.log('Loaded')
      document.querySelectorAll('.list-container h4').forEach((title, idx) => {
        if (index === idx) {
          generalListArr = JSON.parse(localStorage.getItem(`${title.innerText}`));
          generalListArr.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            mainList.appendChild(li)
          })
        }
      })
    })
  })
};








// Other dynamic element for future
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

