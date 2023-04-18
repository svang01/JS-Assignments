const hands = ['rock', 'paper', 'scissors'];

// Define the getHand function
function getHand() {
  const randomNumber = parseInt(Math.random() * 10) % 3;
  return hands[randomNumber];
}

// Define four player objects
const player1 = {
  name: 'Shatt',
  getHand: getHand,
  wins: 0
};

const player2 = {
  name: 'My Alias',
  getHand: getHand,
  wins: 0
};

const player3 = {
  name: 'Byron',
  getHand: getHand,
  wins: 0
};

const player4 = {
  name: 'Cloud',
  getHand: getHand,
  wins: 0
};

// Define the playRound function
function playRound(player1, player2, player1Wins, player2Wins) {
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();

  let winner = null;

  if (player1Hand === player2Hand) {
console.log("It's a tie! Both players played " + player1Hand + ".");
} else if (player1Hand === 'rock' && player2Hand === 'scissors' || player1Hand === 'paper' && player2Hand === 'rock' || player1Hand === 'scissors' && player2Hand === 'paper') {
winner = player1;
player1.wins++;
player1Wins.textContent = player1.wins;
console.log(player1.name + " played " + player1Hand + ", " + player2.name + " played " + player2Hand + ". " + player1.name + " wins!");
} else {
winner = player2;
player2.wins++;
player2Wins.textContent = player2.wins;
console.log(player1.name + " played " + player1Hand + ", " + player2.name + " played " + player2Hand + ". " + player2.name + " wins!");
}

return winner;
};
// Add click event listeners to player buttons
const p1Btn = document.getElementById('p1-play');
const p2Btn = document.getElementById('p2-play');
const p3Btn = document.getElementById('p3-play');
const p4Btn = document.getElementById('p4-play');

const p1Wins = document.getElementById('p1-wins');
const p2Wins = document.getElementById('p2-wins');
const p3Wins = document.getElementById('p3-wins');
const p4Wins = document.getElementById('p4-wins');

p1Btn.addEventListener('click', function() {
playRound(player1, player2, p1Wins, p2Wins);
});

p2Btn.addEventListener('click', function() {
playRound(player2, player1, p2Wins, p1Wins);
});

p3Btn.addEventListener('click', function() {
playRound(player3, player4, p3Wins, p4Wins);
});

p4Btn.addEventListener('click', function() {
playRound(player4, player3, p4Wins, p3Wins);
});

function playGame(playerOne, playerTwo, playUntil) {
let p1W = 0;
let p2W = 0;

while (p1W < playUntil && p2W < playUntil) {
let roundOneWinner = playRound(playerOne, playerTwo);

if (roundOneWinner === playerOne) {
  p1W++;
} else {
  p2W++;
}
}
return p1W > p2W ? player1 : player2;
}

function playTournament(player_One, player_Two, player_Three, player_Four, playUntil) {

let firstRound = playGame(player_One, player_Two, playUntil);
console.log("The winner is " + firstRound.name + "!");
firstRound.wins = 0;

let secondRound = playGame(player_Three, player_Four, playUntil);
console.log("The winner is " + secondRound.name + "!");
secondRound.wins = 0;

let finalRound = playGame(firstRound, secondRound, playUntil);
console.log(finalRound.name + " is world champion!!");
}

playTournament(player1, player2, player3, player4, 3);