//small scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
//big scores
let gameWin = 0;
let gameTie = 0;
let gameLose = 0;
//computerPlay selects Rock, Paper, or Scissors at random to simulate an opponent.
function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["Rock", "Paper", "Scissors"];
   let computerSelection = options[rand];
   return computerSelection;
   
}





//playRound plays one round of rock paper scissors.
function playRound(playerSelection, computerPlay) {
   let result;
   document.getElementById('playerChoice').textContent = `${playerSelection}`;
   document.getElementById('cpuChoice').textContent = `${computerPlay}`;
   if (playerSelection == computerPlay) {
      result = "tied";
   } else if ((playerSelection == "Rock" && computerPlay == "Scissors") || (playerSelection == "Scissors" && computerPlay == "Paper") || (playerSelection == "Paper" && computerPlay == "Rock")) {
      result = "won";
   } else {result = "lost";}
   document.getElementById('result').textContent = `Result: ${result}`;
//tracks the round scores
if (result == 'won') {
   playerScore++;
} else if (result == 'lost') {
   computerScore++;
} else if(result == 'tied') {
   tieScore++
}
//updates all text elements to match current values

document.getElementById('pScore').textContent = `W: ${playerScore}`;
document.getElementById('tScore').textContent = `T: ${tieScore}`;
document.getElementById('cScore').textContent = `L: ${computerScore}`;
//tracks overall scoring
if (playerScore + tieScore + computerScore == 5) {
   if (playerScore == computerScore) {
      gameTie++;
      playerScore = 0;
      tieScore = 0;
      computerScore = 0;
   } else if (playerScore > computerScore) {
      gameWin++;
      playerScore = 0;
      tieScore = 0;
      computerScore = 0;
   } else {
      gameLose++;
      playerScore = 0;
      tieScore = 0;
      computerScore = 0;
   }
document.getElementById('overWin').textContent = `${gameWin}W`;
document.getElementById('overTie').textContent = `${gameTie}T`;
document.getElementById('overLose').textContent = `${gameLose}L`;
}
}





let playerSelection;

   document.getElementById('Rock').addEventListener('click', () => {playerSelection = 'Rock'; playRound(playerSelection, computerPlay());});
   document.getElementById('Paper').addEventListener('click', () => {playerSelection = 'Paper'; playRound(playerSelection, computerPlay());});
   document.getElementById('Scissors').addEventListener('click', () => {playerSelection = 'Scissors'; playRound(playerSelection, computerPlay());});

