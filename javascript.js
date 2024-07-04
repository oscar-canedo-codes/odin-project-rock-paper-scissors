/* Create and append div elements: */

// Serve as a container for buttons
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

// Show the game result)
const resultDiv = document.createElement("div");
resultDiv.setAttribute("id", "result");
document.body.appendChild(resultDiv);

// Display the computer's choice)
const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.setAttribute("id", "computerChoice");
document.body.appendChild(computerChoiceDiv);

// Display running score
const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "score");
document.body.appendChild(scoreDiv);

// Display game winner after reaching 5 points
const gameWinnerDiv = document.createElement("div");
gameWinnerDiv.setAttribute("id", "winner");
document.body.appendChild(gameWinnerDiv);

// Display game over

const gameOverDiv = document.createElement("div");
document.body.appendChild(gameOverDiv);

// Function to get the computer's choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Initialize and state management
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

// Function to play single round
const playRound = (humanChoice) => {
  if (roundsPlayed > totalRounds) {
    gameOverDiv.textContent = `Game Over!`;
    return;
  }

  const computerChoice = getComputerChoice();
  let gameResult = "";

  // Determine the outcome
  if (humanChoice === computerChoice) {
    gameResult = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    gameResult = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    gameResult = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  // Running score
  scoreDiv.textContent = `Scores -> Human: ${humanScore}, Computer ${computerScore}`;
  roundsPlayed++;

  // Update the result div
  resultDiv.textContent = gameResult;

  // Update the computer choice div
  computerChoiceDiv.textContent = `Computer chose ${computerChoice}`;
};

// Determine the overall winner
while (roundsPlayed > totalRounds) {
  if (humanScore > computerScore) {
    gameWinnerDiv.textContent = `You win the game!`;
  } else if (computerScore > humanScore) {
    gameWinnerDiv.textContent = `You lost the game!`;
  } else {
    gameWinnerDiv.textContent = `Game tied!`;
  }

  roundsPlayed++;
}

// Function to create buttons
const createButton = (choice, color) => {
  const button = document.createElement("button");
  button.textContent = choice.toUpperCase();
  button.value = choice;
  button.setAttribute("style", `color: ${color}; background: white;`);

  // Add event listener to button
  button.addEventListener("click", () => {
    // Call playRound with the button's value (human choice)
    playRound(choice);
  });

  container.appendChild(button);
};

// Create buttons for rock, paper, scissors
createButton("rock", "green");
createButton("paper", "blue");
createButton("scissors", "red");
