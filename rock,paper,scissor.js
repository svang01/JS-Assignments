// Define hands array
const hands = ['rock', 'paper', 'scissors'];

// Define getHand function to return a random hand from the array
function getHand() {
  return hands[parseInt(Math.random()*10) % 3];
}

// Define two player objects
const player1 = {
  name: 'SV',
  getHand: getHand
};

const player2 = {
  name: 'My Alias',
  getHand: getHand
};

// Define playRound function to determine the winner of a round
function playRound(player1, player2,) {
  // Get hands from each player
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();

  // Determine winner
  let winner = null;
  if (player1Hand === player2Hand) {
    console.log("It's a tie! SV and his Alias played " + player1Hand);
  } else if ((player1Hand === 'rock' && player2Hand === 'scissors') || 
             (player1Hand === 'paper' && player2Hand === 'rock') || 
             (player1Hand === 'scissors' && player2Hand === 'paper')) {
    winner = player1;
    console.log(player1.name + " played " + player1Hand + " and " + player2.name + " played " + player2Hand + ". " + player1.name + " wins!");
  } else {
    winner = player2;
    console.log(player1.name + " played " + player1Hand + " and " + player2.name + " played " + player2Hand + ". " + player2.name + " wins!");
  }

  return winner;
}

for (let i = 1; i <= 3; i++) {
  console.log("Round " + i + ":");
  playRound(player1, player2);
  console.log();
}
