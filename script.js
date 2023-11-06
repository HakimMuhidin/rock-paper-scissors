// create an funtion that get random choise from three alternatives



function getComputerChoice(){
    choises = ["rock", "paper", "scissors"];
    return choises[Math.floor(Math.random()* choises.length)]

}

console.log(getComputerChoice)
// create a funtion that plays one round of rock paper and scissors

function playRound(playerSelection, computerSelection){
   
    if(playerSelection === "rock" && computerSelection ==="paper" ||
       playerSelection === "paper" && computerSelection ==="scissors"||
       playerSelection === "scissors" && computerSelection ==="rock"){
        return `you lose ${computerSelection} beats ${playerSelection}`
       }else if(playerSelection == computerSelection){
        return "tie"
       }else{
        return `you win ${playerSelection} beats ${computerSelection}`
       }
}


const playerSelection = prompt("rock paper or scissors").toUpperCase()

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
