function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice () {
    switch (getRandomInt(3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function getHumanChoice (){
    let humanChoice = prompt("What's your choice? (Rock, Paper, Scissors)");

    // check if valid input from user
    if (humanChoice === "" || !["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
        console.log("Invalid input from user. Assigning 'Rock'.")
        humanChoice = "Rock";
    }

    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if (computerChoice === humanChoice){
        console.log("It is a tie! Try again.");
    // todo: finish rest of playRound function
    } else if (computerChoice === "rock" && humanChoice === )
}



let humanScore = 0;
let computerScore = 0;