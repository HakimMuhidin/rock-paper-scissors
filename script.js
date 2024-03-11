// create an funtion that get random choise from three alternatives

const playerSelection = "rock";
const computerSelection = getComputerChoice();


function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()* choices.length)]
}

// create a funtion that plays one round of rock paper and scissors

function playRound(playerSelection, computerSelection){
   
    if(playerSelection === "rock" && computerSelection ==="paper" ||
       playerSelection === "paper" && computerSelection ==="scissors"||
       playerSelection === "scissors" && computerSelection ==="rock"){
        return `you lose ${computerSelection} beats ${playerSelection}`
       }else if(playerSelection === computerSelection){
        return "tie"
       }else{
        return `you win ${playerSelection} beats ${computerSelection}`
       }
}



// const playerSelection = prompt("rock paper or scissors").toLowerCase()



console.log(playRound(playerSelection, computerSelection));
