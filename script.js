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
   
   //playerSelection = playerSelection.toLowerCase();
   
   if (playerSelection == computerSelection) {
      result = "tied";
   } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
      result = "won";
   } else {result = "lost";}
   return result;
}

function game() {
   let playerScore = 0;
   let computerScore = 0;
for (let i = 0; i < 5; i++) {
   let playerSelection = (window.prompt("Rock, Paper, or Scissors?"));
   playerSelection = playerSelection.toLowerCase();
   let computerSelection = computerPlay();
   alert(computerSelection);
   //alert(computerSelection);
   playRound(playerSelection, computerSelection)
   if (playRound(playerSelection, computerSelection) == "won") {
      playerScore++;
      alert("You won round " + (i+1) + ". The score is " + playerScore + " - " + computerScore);
   
   } else if (playRound(playerSelection, computerSelection) == "lost") {
      computerScore++;
      alert("You lost round " + (i+1) + ". The score is " + playerScore + " - " + computerScore);
         
   } else {
      alert("Round " + (i+1) + " resulted in a tie. The score is " + playerScore + " - " + computerScore);
      
   }
  
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
}
//const playerSelection = "Rock";
game()
//alert(playRound(playerSelection, computerSelection));