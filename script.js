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

//Function keeps track of score for rounds played.
function scoreKeeper(playerScore, compScore) {
    return [playerScore, compScore];
}



//Button Event Listener
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const content = document.createElement('div');
const score = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

//Trigger playRound() when a button is clicked
let scoreNum = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playSingleRound(button.id, computerPlay()); //Every time I click a button, a round is played.
            scoreNum = scoreKeeper(result, playerScore, computerScore);
            if (scoreNum[0] >= 5) {
                score.textContent = ("You Win!");
                playerScore = 0;
                computerScore = 0;
            
            } else if (scoreNum[1] >= 5) {
                score.textContent= "Computer Wins!";
                playerScore=0;
                computerScore=0;
            
            }
            else {
                score.textContent = `Player Score: ${scoreNum[0]}  Computer Score: ${scoreNum[1]}`;
            }
      
        content.textContent=result;
        results.appendChild(content);
        results.appendChild(score);

    })
});
