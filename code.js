let win = 0;
let lose = 0;

function computerPlay() {
    let value = Math.floor(Math.random()*3) + 1;
    if (value === 1) {
        return ("ROCK");
    } else if (value === 2) {
        return ("PAPER");
    } else {
        return ("SCISSORS");
    }
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection.toUpperCase() === "ROCK") {
        if(computerSelection === "ROCK"){
            return "Tie";
        } else if(computerSelection === "PAPER") {
            
            return "You Lose! Paper beats Rock!";
        } else {
           
            return "You Win! Rock beats Scissors!";
        } 
    } else if(playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
           
            return "You Win! Paper beats Rock!";
        } else if(computerSelection === "PAPER") {
            return "Tie";
        } else {
            
            return "You Lose! Scissors beats Paper!";
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if(computerSelection === "PAPER") {
            
            return "You Win! Scissors beats Paper!";
        } else if (computerSelection === "ROCK") {
            
            return "You lose! Rock beats Scissors";
        } else {
            return "Tie";
        } 
    }
    console.log(win);
    console.log(lose);

}
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter rock, scissors or paper!", '');
        console.log(playerSelection);
        const computerSelection = computerPlay();
        console.log(computerSelection);
            

        alert(playRound(playerSelection, computerSelection));
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if(win>lose){
        alert("You won best of 5!");
    } else if (win<lose) {
        alert("You lost best of 5!");

    } else if (win === lose) {
        alert("Tie game!");
    } else {
        alert("I'm lost...");
    }
}

game(); 

console.log(win);
    console.log(lose);





