// Update the 'Apples' item to say 'Granny Smith Apples'
const update = document.getElementById('list');
const applesItem = list.getElementsByTagName('li')[1];
applesItem.textContent = 'Granny Smith Apples';
// Remove 'Oat Milk' from the list
update.removeChild(update.children[3]);
// Add an item 'Kombucha'
const item2 = document.createElement('li');
item2.innerText ='Kombucha';
list.append(item2)
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const newList = ['protein bars', 'almonds', 'peanut butter'];
list.innerHTML = '';
newList.map(item => {
  let newlist1 = document.createElement('li');
  newlist1.innerHTML = item;
  list.append(newlist1);
});
// Add the class 'important' to the almonds item.
update.children[1].className += ' important';
console.log(update)




































