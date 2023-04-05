let fruitInventory = new Map()

fruitInventory.set('apple', 10);
fruitInventory.set('banana', 20);
fruitInventory.set('orange', 30);

console.log(fruitInventory);

fruitInventory.set('apple', 15);
console.log(fruitInventory);

let bananaIventory = fruitInventory.get('banana');
console.log('banana inventory' + "  " + bananaIventory);

let uniqueColors = new Set()

uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');
console.log(uniqueColors);

uniqueColors.add('yellow');
console.log(uniqueColors);

console.log(uniqueColors.has('blue'));
