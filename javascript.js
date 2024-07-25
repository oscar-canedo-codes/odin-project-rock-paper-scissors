/* STATE MANAGEMENT */
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

/* DOM NODES */
// Score count
const scorePlayer = document.querySelector(".scoreboard__player-score");
const scoreComputer = document.querySelector(".scoreboard__computer-score");

// Running score and game result (assuming this element holds both)
const message = document.querySelector(".message");

// Choice selections
const selectionPlayer = document.querySelector(".selections__player-choice");
const selectionComputer = document.querySelector(
  ".selections__computer-choice"
);

/* GAME LOGIC */

// FUNCTION -> To get the computer's choice
const getComputerSelection = () => {
  let computerNumber = random(3);
  let computerSelection = "";

  switch (computerNumber) {
    case 1:
      computerSelection = "fire";
      break;
    case 2:
      computerSelection = "water";
      break;
    case 3:
      computerSelection = "grass";
      break;
    default:
      break;
  }
  return computerSelection;
};

// FUNCTION -> to play single round
const playRound = (playerSelection) => {
  const computerSelection = getComputerSelection();
  let gameResult = "";

  selectionPlayer.textContent = `Player chose ${playerSelection}`;

  if (roundsPlayed > totalRounds) {
    message.textContent = `Game Over!`;
    return;
  }

  // DETERMINE the outcome
  if (playerSelection === computerSelection) {
    gameResult = "It's a tie!";
  } else if (
    (playerSelection === "fire" && computerSelection === "grass") ||
    (playerSelection === "water" && computerSelection === "fire") ||
    (playerSelection === "grass" && computerSelection === "water")
  ) {
    playerScore++;
    gameResult = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    gameResult = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Update the display after each round
  updateDisplay(gameResult, computerSelection);

  // DETERMINE the overall winner after all rounds
  checkWinner();
};

/* DISPLAY */
const updateDisplay = (gameResult, computerSelection) => {


  // Score count
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;

  // Game result (including running score)
  message.textContent = `${gameResult} - Scores: Player ${playerScore}, Computer ${computerScore}`;

  // Choice Selections
  selectionComputer.textContent = `Computer chose ${computerSelection}`;

};

// FUNCTION -> Check winner
const checkWinner = () => {
  if (roundsPlayed > totalRounds) {
    if (playerScore > computerScore) {
      message.textContent = `You win the game!`;
    } else if (computerScore > playerScore) {
      message.textContent = `You lost the game!`;
    } else {
      message.textContent = `Game tied!`;
    }
  }
};

/* EVENT HANDLERS */

const fireButton = document.querySelector(".card.card--fire");
fireButton.addEventListener("click", () => {
  playRound("fire");
});

const waterButton = document.querySelector(".card.card--water");
waterButton.addEventListener("click", () => {
  playRound("water");
});

const grassButton = document.querySelector(".card.card--grass");
grassButton.addEventListener("click", () => {
  playRound("grass");
});

/* HELPER FUNCTION */

function random(number) {
  return Math.floor(Math.random() * number + 1);
}