const toDoList = document.getElementById('to-do-list');
const inputBox = document.getElementById('new-item');
const addButton = document.getElementById('add-button');

function addNewItem() {
  const newItem = document.createElement('li');
  newItem.textContent = inputBox.value;
  toDoList.appendChild(newItem);
  inputBox.value = '';
}

function removeItem(event) {
  event.target.remove();
}

addButton.addEventListener('click', addNewItem);
toDoList.addEventListener('click', removeItem);