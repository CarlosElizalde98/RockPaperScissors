function computerPlay() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let randomMove = array[Math.floor(Math.random() * array.length)];
    return randomMove;
}

console.log(computerPlay());