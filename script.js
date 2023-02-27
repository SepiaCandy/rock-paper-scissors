//computerPlay selects Rock, Paper, or Scissors at random to simulate an opponent.
function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["rock", "paper", "scissors"];
   let computerSelection = options[rand];
   //alert(computerSelection);
   return computerSelection;
   
}
//playRound plays one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
   let result;
   
   
   if (playerSelection == computerSelection) {
      result = "tied";
   } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
      result = "won";
   } else {result = "lost";}
   return result;
}

let winOrLose
if (playerScore > computerScore) {
    winOrLose = "win";
} else {
    winOrLose = "lose";
}
let replay = confirm("Final score is " + playerScore + " - " + computerScore + " you " + winOrLose + ". Would you like to play again?");

   if (replay == true) {
      window.location.reload();
   } else if (replay == false) {
      window.close();
   }