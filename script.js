//Function allows the computer to make a move.
function computerPlay() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let randomMove = array[Math.floor(Math.random() * array.length)];
    return randomMove;
}

//Function determines the conditions of a single round and the result of a round.
function playSingleRound(playerSelection, computerSelection) {
    let result = '';
    playerSelection = playerSelection.toUpperCase();
    
        if ((playerSelection == "ROCK") && (computerSelection == 'Scissors')) {
            playerScore += 1;
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((playerSelection == "SCISSORS") && (computerSelection == "Paper")){
            playerScore += 1;
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((playerSelection == 'PAPER') && (computerSelection == 'Rock')){
            playerScore += 1;
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((computerSelection == 'Rock') && (playerSelection == "SCISSORS")) {
            computerScore += 1;
            return result = `You lose. Computer's ${computerSelection} beats your ${playerSelection}`;
        }
        else if ((computerSelection == "Scissors") && (playerSelection == "PAPER")) {
            computerScore += 1;
            return result = `You lose. Computer's ${computerSelection} beats your ${playerSelection}`;
        }
        else if ((computerSelection == "Paper") && (playerSelection == "ROCK")) {
            computerScore += 1;
            return result = `You lose. Computer's ${computerSelection} beats your ${playerSelection}`;
        }
        else {
            return result = "Bummer, it was a tie.";
        }
    
}

function scoreKeeper(scoreString, playerScore, compScore) {
    console.log(scoreString);
    console.log(playerScore);
    console.log(compScore);
    if (scoreString.includes("win")) {
        playerScore += 1;
    }
    else if (scoreString.includes("lose")){
        compScore += 1;
    }
    else {
        return "Tie\n " + `Player Score: ${playerScore}  Computer Score = ${compScore}`;
    }
    return [playerScore, compScore];
}



//Button Event Listener
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const content = document.createElement('div');
const score = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

let scoreNum = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playSingleRound(button.id, computerPlay()); //Every time I click a button, a round is played.
        for (let i = 0; i < 5; i++) {
            scoreNum = scoreKeeper(result, playerScore, computerScore);
            if (scoreNum[0] >= 5) {
                score.textContent = ("You Win!");
                break;
            } else if (scoreNum[1] >= 5) {
                score.textContent= "Computer Wins!";
                break;
            }
            else {
                score.textContent = scoreNum;
            }
        }
        content.textContent=result;
        results.appendChild(content);
        results.appendChild(score);

    })
});
