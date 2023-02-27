//computerPlay selects Rock, Paper, or Scissors at random to simulate an opponent.
function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["rock", "paper", "scissors"];
   let computerSelection = options[rand];
   console.log(computerSelection)
   return computerSelection;
   
}
//playRound plays one round of rock paper scissors.
function playRound(playerSelection, computerPlay) {
   let result;
   
   
   if (playerSelection == computerPlay) {
      result = "tied";
   } else if ((playerSelection == "rock" && computerPlay == "scissors") || (playerSelection == "scissors" && computerPlay == "paper") || (playerSelection == "paper" && computerPlay == "rock")) {
      result = "won";
   } else {result = "lost";}
   console.log(result, playerSelection, computerPlay);
   return result;
}

let playerSelection;

   document.getElementById('Rock').addEventListener('click', () => {playerSelection = 'rock'; playRound(playerSelection, computerPlay());});
   document.getElementById('Paper').addEventListener('click', () => {playerSelection = 'paper'; playRound(playerSelection, computerPlay());});
   document.getElementById('Scissors').addEventListener('click', () => {playerSelection = 'scissors'; playRound(playerSelection, computerPlay());});