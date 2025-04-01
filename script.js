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
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);

    if (computerChoice === humanChoice){
        console.log("It is a tie!");
    // todo: finish rest of playRound function
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("You lose!");
        computerScore += 1;
    } else {
        console.log("You win!"); 
        humanScore += 1;    
    }
}

function playGame() {

    console.log("Playing 5 rounds of Rock, Paper, Scissors with the computer.")

    for (let i=1; i<6; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log(`Score after the first round is: Computer ${computerScore}, Player ${humanScore}`)
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();