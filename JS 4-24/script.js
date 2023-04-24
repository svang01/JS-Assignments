// Create two arrays of numbers called numbers1 and numbers
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
let numbers2 = [9, 10, 11, 12, 13, 14, 15];

// Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
const arrayMerge = [ ...numbers1, ...numbers2]
console.log(arrayMerge);

// Define an arrow function called square that accepts a number as an argument and returns the square of the number.
const square = (num) => num * num
console.log(square(5));

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = arrayMerge.map(square);
console.log(arrayMerge.map(square));
// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
const evenSquares = squares.filter(isEven)
console.log(evenSquares);
// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare, secondEvenSquare] = evenSquares
console.log(firstEvenSquare);
console.log(secondEvenSquare);
// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`Original Array: ${arrayMerge}`);
console.log(`Square Array: ${squares}`);
console.log(`Even Square: ${evenSquares}`);
console.log(`Extracted Even Squares: ${firstEvenSquare}, ${secondEvenSquare}`);