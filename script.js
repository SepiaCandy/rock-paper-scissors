let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//computerPlay selects Rock, Paper, or Scissors at random to simulate an opponent.
function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["Rock", "Paper", "Scissors"];
   let computerSelection = options[rand];
   console.log(computerSelection)
   return computerSelection;
   
}





//playRound plays one round of rock paper scissors.
function playRound(playerSelection, computerPlay) {
   let result;
   
   
   if (playerSelection == computerPlay) {
      result = "tied";
   } else if ((playerSelection == "Rock" && computerPlay == "Scissors") || (playerSelection == "Scissors" && computerPlay == "Paper") || (playerSelection == "Paper" && computerPlay == "Rock")) {
      result = "won";
   } else {result = "lost";}
   console.log(result, playerSelection, computerPlay);
//tracks the score
if (result == 'won') {
   playerScore++;
} else if (result == 'lost') {
   computerScore++;
} else if(result == 'tied') {
   tieScore++
}
//updates all text elements to match current values
document.getElementById('playerChoice').textContent = `${playerSelection}`;
document.getElementById('cpuChoice').textContent = `${computerPlay}`;
document.getElementById('pScore').textContent = `W: ${playerScore}`;
document.getElementById('tScore').textContent = `T: ${tieScore}`;
document.getElementById('cScore').textContent = `L: ${computerScore}`;
}





let playerSelection;

   document.getElementById('Rock').addEventListener('click', () => {playerSelection = 'Rock'; playRound(playerSelection, computerPlay());});
   document.getElementById('Paper').addEventListener('click', () => {playerSelection = 'Paper'; playRound(playerSelection, computerPlay());});
   document.getElementById('Scissors').addEventListener('click', () => {playerSelection = 'Scissors'; playRound(playerSelection, computerPlay());});

