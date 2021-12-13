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
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((playerSelection == "SCISSORS") && (computerSelection == "Paper")){
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((playerSelection == 'PAPER') && (computerSelection == 'Rock')){
            return result = `You win! your ${playerSelection} beats ${computerSelection}`;
        }
        else if ((computerSelection == 'Rock') && (playerSelection == "SCISSORS")) {
            return result = `You lose. ${computerSelection} beats your ${playerSelection}`;
        }
        else if ((computerSelection == "Scissors") && (playerSelection == "PAPER")) {
            return result = `You lose. ${computerSelection} beats your ${playerSelection}`;
        }
        else if ((computerSelection == "Paper") && (playerSelection == "ROCK")) {
            return result = `You lose. ${computerSelection} beats your ${playerSelection}`;
        }
        else {
            return result = "Bummer, it was a tie.";
        }  
}

//Button Event Listener
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        console.log(playSingleRound(button.id, computerPlay()));

    } )
});