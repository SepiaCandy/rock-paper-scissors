//computerPlay selects Rock, Paper, or Scissors at random to simulate an opponent.
function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["rock", "paper", "scissors"];
   let computerSelection = options[rand];
   return computerSelection;
}
//playRound plays one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
   let result;
   playerSelection = playerSelection.toLowerCase();
   if (playerSelection == computerSelection) {
      result = "tie";
   } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
      result = "win"
   } else {result = "lose"}
   return result;
}