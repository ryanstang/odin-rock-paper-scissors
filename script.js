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

    let context = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;

    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);

    if (computerChoice === humanChoice){
        context += "It is a tie!";
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        context += "You lose!";
        computerScore += 1;
    } else {
        context += "You win!"; 
        humanScore += 1;    
    }
    showRoundWinner(context);
    updateScore();
}

function showRoundWinner(context) {
    const scoreDiv = document.getElementById("score");

    const roundWinnerDiv = document.createElement('div');
    roundWinnerDiv.textContent = `Round #${round}: ${context}`;
    round += 1;
    roundWinnerDiv.className = "roundWinner";

    scoreDiv.insertAdjacentElement('beforebegin', roundWinnerDiv);

}

function updateScore () {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Score: Computer ${computerScore}, Player ${humanScore}`;
}

function playGame() {

    // console.log("Playing 5 rounds of Rock, Paper, Scissors with the computer.")

    // for (let i=1; i<6; i++) {
    //     const humanChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();

    //     playRound(humanChoice, computerChoice);

    //     console.log(`Score after the first round is: Computer ${computerScore}, Player ${humanScore}`)
    // }
    const buttons = document.querySelectorAll('button');
    buttons.forEach ((button) => {
        button.addEventListener('click', function () {
            const computerChoice = getComputerChoice();
            const humanChoice = button.textContent;
    
            playRound(humanChoice, computerChoice);

            if (computerScore === 5 || humanScore === 5) {
                endGame();
                console.log("Ended game.")
              }
        })
    })
}
 

function endGame () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach ((button) => {
            button.disabled = true;
            console.log('Button is now disabled');
    })
    const scoreDiv = document.getElementById("score");

    const winnerDiv = document.createElement('div');
    if (computerScore === 5) {
        winnerDiv.textContent = "Computer";
    } else {
        winnerDiv.textContent = "Player";
    }

    winnerDiv.textContent += " has won the game. Game has ended."
    scoreDiv.insertAdjacentElement('afterEnd', winnerDiv);
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

playGame();