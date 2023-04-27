"use strict";


// fuction name self explanatory
// aray of options
// randomise the options
// return the random options
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; 
     const randomIndex = Math.floor(Math.random() * options.length);
     return options[randomIndex];
  }


 /* The `playRound` function takes two parameters: `playerSelection` and `computerSelection`. It then
 checks if they are equal, in which case it returns "tie". If they are not equal, it checks for the
 different possible combinations of choices and returns a string indicating whether the player wins
 or loses, and which choice beats the other. */
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
      return "tie";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
      return `you lose ${computerSelection} beats ${playerSelection}`;

    }else if(playerSelection === "paper" && computerSelection === "scissors"){
      return `you lose ${computerSelection} beats ${playerSelection}`;
    
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
      return `you lose ${computerSelection} beats${playerSelection}`;
    }else{
      return `you win ${playerSelection} beats ${computerSelection}`;
    }
  // your code here!
}

 /**
  * The function "game" plays a round of rock-paper-scissors between a player and a computer and
  * returns the result with the round number.
  * @returns a string that includes the round number and the result of the playRound function. ,
  */
  function game(){
    let round = 0;
    round++
    let result;
     result = playRound(playerSelection, computerSelection); 
     return "round  " + round + " " + result ;
     

  }
 
// let playerSelection = prompt("rock paper scissors", "rock" );
let playerSelection = "PAPER"
playerSelection = playerSelection.toLowerCase()
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(game())