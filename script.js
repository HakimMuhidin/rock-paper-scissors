

function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()* choices.length)]
}

function getHumanChoice(){
    let getChoice;
    getChoice = prompt("rock papper or scissors")
    return getChoice;
}

let humanScore = 0
let computerScore = 0;

function playround(humanChoice, computerChoice){
    if(humanChoice === "paper" && computerChoice === "rock" ||
       humanChoice ==="rock" && computerChoice ==="scissors" ||
        humanChoice ==="scissors" && computerChoice === "paper"
    ){

        return "human wins" 
    }else{
        return "computer wins"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playround(humanSelection, computerSelection);
