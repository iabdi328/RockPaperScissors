const buttonsContainer = document.querySelector(".buttons");
const h1 = document.querySelector("h1")


let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    buttonsContainer.addEventListener("click", (e) => {
        if (roundCounter <= 5){
            const humanChoice = e.target.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            console.log(result);
        }

        h1.innerHTML = `Round: ${roundCounter}`; 
        roundCounter++;
        if (roundCounter > 5) {
            endGame();
        }
    });
}

function playRound(humanChoice, computerChoice) {
    const results = document.querySelector(".results");
    if (humanChoice === computerChoice) {
        results.innerHTML = "It's a tie!";

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.innerHTML = "You win this round!";
        
    } else {
        computerScore++;
        results.innerHTML = "CPU wins this round!";
        
    }
}

function endGame() {
    const results = document.querySelector(".results");
    if (humanScore > computerScore ) {
        results.innerHTML = "Congratulations! You won the game!";
    } else if (computerScore > humanScore) {
        results.innerHTML = "Game over! CPU won the game!";
    }
    else{
        results.innerHTML = "Game Over! Its a tie";
    }
    // disable buttons after game ends
    buttonsContainer.style.pointerEvents = "none";

    setTimeout(() => {
        h1.innerHTML = `
            <p>Final Scores:</p>
            <p>Human: ${humanScore}</p>
            <p>CPU: ${computerScore}</p>
        `;
    }, 5000);
}


getHumanChoice();
