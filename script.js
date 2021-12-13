let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const content =document.createElement('div');

buttons.addEventListener('click', playGame());

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
    
        if (((playerSelection == "ROCK") && (computerSelection == 'Scissors')) || 
        
        ((playerSelection == "SCISSORS") && (computerSelection == "Paper")) ||
        
        ((playerSelection == 'PAPER') && (computerSelection == 'Rock'))) {
          
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if (((computerSelection == 'Rock') && (playerSelection == "SCISSORS")) || 
        
        ((computerSelection == "Scissors") && (playerSelection == "PAPER")) || 

        ((computerSelection == "Paper") && (playerSelection == "ROCK"))) {

            return result = `You lose. ${computerSelection} beats your ${playerSelection}`;
        }
        else {
            return result = "Bummer, it was a tie.";
        }
    
}

//Function keeps track of the score and updates accordingly.
function updateGameScore(choice) {
    let gameResult;
    gameResult = playSingleRound(choice, computerPlay());
    content.textContent=gameResult;
    results.appendChild(content);


    if (gameResult.includes("win") && playerScore < 5){
        playerScore++;
        return "Player score: " + playerScore + '  Computer Score: ' + compScore;
    }
    else if (gameResult.includes("lose") && compScore < 5){
        compScore++;
        return "Player Score: " + playerScore + "  Computer Score: " + compScore;
    }
    else if (gameResult.includes('tie')) {
        return "Tie";
    }
    else {

    }

}

//Button Event Listener
//Plays the game and attaches results to screen.
function playGame() {
    const buttons = document.querySelectorAll('button');
    const results = document.querySelector('#results');
    const content = document.createElement('div');
    const score = document.createElement('p');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let result = updateGameScore(button.id); //Every time I click a button, a round is played.
            content.textContent=result;
            results.appendChild(content);

        })
    });
}
