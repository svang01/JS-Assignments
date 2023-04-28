// Define an array of image paths to use in the game
const images = [
    "images/blackp.jpeg",
    "images/bucky.jpeg",
    "images/ca.jpeg",
    "images/hawk.jpeg",
    "images/hulk.jpeg",
    "images/ironman.jpeg",
    "images/logo.jpeg",
    "images/loki.jpeg",
    "images/red.jpeg",
    "images/spidey.jpeg",
    "images/thanos.jpeg",
    "images/thor.jpeg",
    "images/venom.jpeg",
    "images/vision.jpeg",
    "images/dead.jpeg",
  ];
  
// Duplicate the image paths to create pairs
const symbols = [...images, ...images];
  
// Shuffle the symbols array
 function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
  
shuffle(symbols);
  
// Get the elements of the game board
const cards = document.querySelectorAll(".card");
  
// Keep track of the currently flipped cards
let flippedCards = [];
  
// Keep track of the number of moves made by the player
let moves = 0;
  
// Get the score display and reset button elements
const scoreDisplay = document.querySelector("#moves");
const resetButton = document.querySelector("#reset");
  
// Add event listeners to the cards
cards.forEach((card, index) => {
  card.dataset.index = index % symbols.length;
  card.addEventListener("click", () => {
    if (flippedCards.length === 2 || flippedCards.includes(card)) {
      return;
    }
  
// Flip the card over and reveal its symbol
const symbolIndex = card.dataset.index;
card.style.backgroundImage = `url(${symbols[symbolIndex]})`;
card.classList.add("flipped");
  
// Add the card to the flippedCards array
flippedCards.push(card);
  
// If two cards have been flipped, check if they match
if (flippedCards.length === 2) {
  const [card1, card2] = flippedCards;

if (card1.style.backgroundImage === card2.style.backgroundImage) {
  flippedCards = [];
  } else {
    setTimeout(() => {
      card1.style.backgroundImage = "";
      card2.style.backgroundImage = "";
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
      }, 1000);
    } moves++;
    scoreDisplay.textContent = moves;
    }
  
// Check if all pairs of cards have been matched and display a win message if so
if (document.querySelectorAll(".flipped").length === cards.length) {
  alert(`Congratulations! You won in ${moves} moves.`);
}
  });
});
  
// Add event listener to the reset button
resetButton.addEventListener("click", () => {
  shuffle(symbols);
  moves = 0;
  scoreDisplay.textContent = moves;
  
// Flip all cards back over and remove the "flipped" class
cards.forEach((card) => {
  card.style.backgroundImage = "";
  card.classList.remove("flipped");
});
  
// Reset the flippedCards array
flippedCards = [];
});









 
