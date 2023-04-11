// Define the hands array
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
function playRound(player1, player2) {
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();

  let winner = null;

  if (player1Hand === player2Hand) {
    console.log("It's a tie! Both players played " + player1Hand + ".");
  } else if (player1Hand === 'rock' && player2Hand === 'scissors' || player1Hand === 'paper' && player2Hand === 'rock' || player1Hand === 'scissors' && player2Hand === 'paper') {
    winner = player1;
    player1.wins++;
    console.log(player1.name + " played " + player1Hand + ", " + player2.name + " played " + player2Hand + ". " + player1.name + " wins!");
  } else {
    winner = player2;
    player2.wins++;
    console.log(player1.name + " played " + player1Hand + ", " + player2.name + " played " + player2Hand + ". " + player2.name + " wins!");
  }

  return winner;
}

// // Play a single game between player1 and player2
// const gameWinner = playGame(player1, player2, 5);
// console.log(gameWinner.name + " wins the game!");

// // Define the playGame function
// function playGame(player1, player2, playUntil) {
//   playUntil = playUntil || 3;

//   while (player1.wins < playUntil && player2.wins < playUntil) {
//     playRound(player1, player2);
//   }

//   if (player1.wins >= playUntil) {
//     return player1;
//   } else {
//     return player2;
//   }
// }

// // Define the playGame function
// function playGame(player1, player2, playUntil) {
//     playUntil = playUntil || 3;
  
//     while (player1.wins < playUntil && player2.wins < playUntil) {
//       playRound(player1, player2);
//     }
  
//     if (player1.wins >= playUntil) {
//       return player1;
//     } else {
//       return player2;
//     }
// }
  
// // Define the playTournament function
// function playTournament(player1, player2, player3, player4, playUntil) {
//     playUntil = playUntil || 5;
  
//     console.log("Semi-final 1: " + player1.name + " vs " + player2.name);
//     const semiFinalWinner1 = playGame(player1, player2, playUntil);
//     console.log(semiFinalWinner1.name + " advances to the final round!");
  
//     console.log("Semi-final 2: " + player3.name + " vs " + player4.name);
//     const semiFinalWinner2 = playGame(player3, player4, playUntil);
//     console.log(semiFinalWinner2.name + " advances to the final round!");
  
//     console.log("Final: " + semiFinalWinner1.name + " vs " + semiFinalWinner2.name);
//     const finalWinner = playGame(semiFinalWinner1, semiFinalWinner2, playUntil);
//     console.log(finalWinner.name + " is the World Champion!");}

//     playTournament(player1, player2, player3, player4, 5);

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