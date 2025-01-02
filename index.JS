
function playGame(playRound) {


let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice){

    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    
    if(humanChoiceLower === computerChoiceLower) {

        alert(`It's a tie!`);
        return;

   }else if ((humanChoiceLower === "rock" && computerChoiceLower === "scissors")||
             (humanChoiceLower === "paper" && computerChoiceLower === "rock")||
             (humanChoiceLower === "scissors" && computerChoiceLower === "paper")) {


             alert(`You win! ${humanChoiceLower} beats ${computerChoiceLower}`);
             humanScore++;
             return;
     
   }else {
     
             alert(`You lose! ${computerChoiceLower} beats ${humanChoiceLower}`);
             computerScore++;
             return;
   }
}



function getHumanChoice() {

    while(true) {
        let userInput = prompt ("Enter rock, paper, or scissors.").toLowerCase();

        if(userInput === "rock" || userInput === "paper" || userInput === "scissors"  ) {
          return userInput;
        
        }else {
            alert ("Invalid User Input");
        }
    }        
}




function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random()*3)+1);

    if (randomNumber === 1 ) {
        return "rock";
    }else if (randomNumber === 2) {
        return "paper";
    }else {
        return "scissors";
    }
}

for(i=0; i<5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log (`Round ${i+1}: Human Score: ${humanScore}, Computer Score: ${computerScore}` );
}

if (humanScore > computerScore){
    alert(`You win the game!" - final score: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}else if (computerScore > humanScore) { 
    alert(`You lose the game!" - final score: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}else {
    alert(`It's a tie!" - final score: Human Score: ${humanScore}, Computer Score: ${computerScore}`)
}


}

playGame();
