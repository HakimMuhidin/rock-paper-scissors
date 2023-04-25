"use strict";


// fuction name self explanatory
// aray of options
// randomise the options
// return the random options
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]; 
     let randomIndex = Math.floor(Math.random() * options.length);
     return options[randomIndex];
  }


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
      return `you win ${playerSelection} beats ${computerSelection}`
    }
  // your code here!
}
 
let playerSelection = prompt("rock paper scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
