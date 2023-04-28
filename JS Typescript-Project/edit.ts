interface ListItem {
  text: string;
  className?: string;
}

const update: HTMLUListElement = document.getElementById('list') as HTMLUListElement;
const applesItem: HTMLLIElement = update.getElementsByTagName('li')[1];
applesItem.textContent = 'Granny Smith Apples';

update.removeChild(update.children[3]);

const kombuchaItem: ListItem = { text: 'Kombucha' };
const item2: HTMLLIElement = document.createElement('li');
item2.innerText = kombuchaItem.text;
update.append(item2);

const newList: Array<ListItem> = [
  { text: 'protein bars' },
  { text: 'almonds', className: 'important' },
  { text: 'peanut butter' }
];

update.innerHTML = '';
newList.forEach((item: ListItem) => {
  const listItem: HTMLLIElement = document.createElement('li');
  listItem.innerText = item.text;
  if (item.className) {
    listItem.className = item.className;
  }
  update.append(listItem);
});

console.log(update);




































