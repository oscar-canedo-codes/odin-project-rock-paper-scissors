console.log("hola puta");

// PSUEDO CODE

/* Step 2: Write the logic to get the computer choice

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

    Create a new function named getComputerChoice.
    Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
        Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
    Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
 */

const getComputerChoice = () => {
  // -> randomizedNumber, Math.random()
  // -> Conditional values: rock || paper || scissors
  // -> Return string
};

/* Step 3: Write the logic to get the human choice
    
    Your game will be played by a human player. You will write a function that takes the user choice and returns it.
    
    Create a new function named getHumanChoice.
    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    Hint: Use the prompt method to get the user’s input.
    Test what your function returns by using console.log.
    */

const getHumanChoice = () => {
  // -> Prompt = userInput;
  // -> Validate
  // -> const result = validated userInput;
  // -> return string
};

/* Step 4: Declare the players score variables
    
    Your game will keep track of the players score. You will write variables to keep track of the players score.
    
    Create two new variables named humanScore and computerScore in the global scope.
    Initialize those variables with the value of 0.
    */

/* Step 5: Write the logic to play a single round
   
   Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
   
   Create a new function named playRound.
   Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
   Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
   Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
   Increment the humanScore or computerScore variable based on the round winner.
   */

/* Step 6: Write the logic to play the entire game
  
  Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
  
  Create a new function named playGame.
  Move your playRound function and score variables so that they’re declared inside of the new playGame function
  Play 5 rounds by calling playRound 5 times.
  Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
  Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
  If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
  */

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // -> getHumanChoice, case-insensitive

    // -> getComputerChoice, conditional:
    // rock > scissors
    // scissors > paper
    // paper > scissors

    // humanChoice === computerChoice,
    // result tie

    // humanChoice !==  computerChoice,
    // result winnerScore

    //  const winnerScore for (i= 0, i>5, i++);

    // return console.log ('')

    /*   Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
  Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful. */
  };

  playRound(humanSelection, computerSelection);



  // -> function playRound within scope

  // -> console.log(winnerGame);
};