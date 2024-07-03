

function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()* choices.length)]
}








//  const playerSelection = prompt("rock paper or scissors").toLowerCase()
const computerSelection = getComputerChoice();
