"use strict";
const update = document.getElementById('list');
const applesItem = update.getElementsByTagName('li')[1];
applesItem.textContent = 'Granny Smith Apples';
update.removeChild(update.children[3]);
const kombuchaItem = { text: 'Kombucha' };
const item2 = document.createElement('li');
item2.innerText = kombuchaItem.text;
update.append(item2);
const newList = [
    { text: 'protein bars' },
    { text: 'almonds', className: 'important' },
    { text: 'peanut butter' }
];
update.innerHTML = '';
newList.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = item.text;
    if (item.className) {
        listItem.className = item.className;
    }
    update.append(listItem);
});
console.log(update);
