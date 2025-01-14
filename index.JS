let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const humanScorePara = results.children[0];
const computerScorePara = results.children[1];
const gameResultPara = results.querySelector("#game-result");

function playRound(humanChoice) {
    const compChoice = getComputerChoice(); // Call the function correctly

    if (humanChoice === compChoice) {
        gameResultPara.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
    ) {
        gameResultPara.textContent = `You win! ${humanChoice} beats ${compChoice}`;
        humanScore++;
    } else {
        gameResultPara.textContent = `You lose! ${compChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScores();
    checkForWinner();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function updateScores() {
    humanScorePara.textContent = `Human Score: ${humanScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

function checkForWinner() {
    if (humanScore === 5) {
        gameResultPara.textContent = `You win the game! Final score: Human ${humanScore}, Computer ${computerScore}`;
        disableButtons();
    } else if (computerScore === 5) {
        gameResultPara.textContent = `You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}`;
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

// Event listeners
document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));
