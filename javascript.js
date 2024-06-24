/* FUNCTION getComputerChoice: 
    DEFINE array choices with "rock", "paper", "scissors"
    GENERATE random index between 0 and length of choices array
    RETURN choice at random index

    FUNCTION testGetComputerChoice:
      FOR i from 0 to 9:
      CALL getComputerChoice
      LOG the result 
*/

// Function to get the computer's choice
const getComputerChoice = () => {
  // Array of possible choices
  const choices = ["rock", "paper", "scissors"];
  // Generate a random index and round to the nearest whole number
  const randomIndex = Math.floor(Math.random() * choices.length);
  // Return the choice at the random index
  return choices[randomIndex];
};
// Test getComputerChoice function
const testGetComputerChoice = () => {
  for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
  }
};

/* FUNCTION getHumanChoice:
    PROMPT user to enter "Rock", "Paper", or "Scissors" and STORE in variable choice
    CONVERT choice to lowercase

    IF choice is "rock" OR choice is "paper" OR choice is "scissors":
        RETURN choice
    ELSE:
        ALERT user that their choice is invalid
        CALL getHumanChoice function again (recursive call)
 */

// Function to get the human player's choice by recursion
const getHumanChoice = () => {
  // Prompt user for their choice and convert to lowercase
  const choice = prompt("Rock, Paper, or Scissors").toLowerCase();

  // Check if the choice is valid
  if (["rock", "paper", "scissors"].includes(choice)) {
    // Return the valid choice
    return choice;
  } else {
    // Alert the user about the invalid choice
    alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    // Call the function recursively until a valid choice is entered
    return getHumanChoice();
  }
};

/* FUNCTION playGame:
INITIALIZE humanScore to 0
INITIALIZE computerScore to 0

DEFINE FUNCTION playRound(humanChoice, computerChoice):
  CONVERT humanChoice to lowercase

    DETERMINE winner based on if-else structure on possible winning for human player:
    rock > scissors
    scissors > paper
    paper > rock

  IF humanChoice equals computerChoice
    LOG "It's a tie!"
  ELSE IF humanChoice beats computerChoice: 
    INCREMENT humanScore  
    LOG "You Win! humanChoice beats computerChoice"
  ELSE: 
    INCREMENT computerScore
    LOG "You lose! computerChoice beats humanChoice"
  LOG current scores

  FOR 1 to 5:
    CALL getHumanChoice
    CALL getComputerCoice
    CALL playRound with humanChoice and computerChoice

  IF humanScore > computerScore:
    LOG "Congratulations! You won the game!"
  ELSE IF 
    LOG "You lost the game!"
  ELSE:
  LOG "The game is a tie!"
  */

// Function to play full game
const playGame = () => {
  // INITIALIZE score variables for human and computer
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a single round
  const playRound = (humanChoice, computerChoice) => {
    // Convert humanChoice to lowercase to handle case insensitivity
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      // Increment human score if human wins
      humanScore++;
      console.log(
        `You win! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${computerChoice}`
      );
    } else {
      // Increment computer score if computer wins
      computerScore++;
      console.log(
        `You lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice}`
      );
    }
    // Log the current scores
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  };

  // Play 5 turns
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Determine the overall winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("Game tied!");
  }
};

// Start the game
playGame();
