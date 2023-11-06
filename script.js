// create an funtion that get random choise from three alternatives

function getComputerChoice(){
    choises = ["rock", "paper", "scissors"];
    computerSelection = choises[Math.floor(Math.random()* choises.length)]
    return computerSelection
}

console.log(getComputerChoice)




const playerSelection = "rock";
const computerSelection = getComputerChoice();