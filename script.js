//Function allows the computer to make a move.
function computerPlay() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let randomMove = array[Math.floor(Math.random() * array.length)];
    return randomMove;
}

//Function determines the conditions of a single round and the result of a round.
function singleRound(playerSelection, computerSelection) {
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

//Basic function just calls the round function and executes it 5 times. Will fix it with a 
//loop later.
function game() {
    playerSelection = prompt("Enter Rock, Paper, or Scissors")
    console.log(singleRound(playerSelection, computerPlay()));
    playerSelection = prompt("Enter Rock, Paper, or Scissors")
    console.log(singleRound(playerSelection, computerPlay()));
    playerSelection = prompt("Enter Rock, Paper, or Scissors")
    console.log(singleRound(playerSelection, computerPlay()));
    playerSelection = prompt("Enter Rock, Paper, or Scissors")
    console.log(singleRound(playerSelection, computerPlay()));
    playerSelection = prompt("Enter Rock, Paper, or Scissors")
    console.log(singleRound(playerSelection, computerPlay()));
}

//Calls the game
game();