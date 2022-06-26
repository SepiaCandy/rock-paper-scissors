function computerPlay() {
   let rand = Math.floor(Math.random() * 3);
   const options = ["rock", "paper", "scissors"];
   let answer = options[rand];
   return answer;
}
console.log(computerPlay);