function getComputerChoice(){
    let randomInt =  Math.floor(Math.random() * 3);

    if (randomInt === 0){
        return "rock";
    }
    else if (randomInt === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}



function getHumanChoice(){
    let userInput;
    const validChoices = ["rock", "paper", "scissors"];

    while (true){
        userInput = prompt("Please input your choice (Rock, Paper, Scissors): ").toLowerCase();
        if (validChoices.includes(userInput)){
            break;
        }
        else{
            alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        }
    }
    return userInput;
}

function playRound(humanChoice,computerChoice ){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "CPU wins this round!";
    }
}


function playGame(){
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice;
        const computerChoice = getComputerChoice;
        const result = playRound(getHumanChoice(), getComputerChoice());
        alert(result);
    }

    scorePrint();

}


function scorePrint(){
    let winner;
    if (humanScore > computerScore){
        alert("Player 1 Wins the game!");
    }
    else if (computerScore > humanScore){
        alert("CPU wins the game!");
    }
    else{
        alert("The game is a tie!");
    }

    alert(`Final scores - Player: ${humanScore}, CPU: ${computerScore}`);
}


humanScore = 0;
computerScore = 0;

playGame()