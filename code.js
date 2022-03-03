let win = 0;
let lose = 0;
let tie = 0;

const container = document.querySelector('#container');

const theDiv = document.createElement('div');


const resultDisplay = document.createElement('h2');

const score = document.createElement('h2');
const playerScore = document.createElement('span');
const computerScore = document.createElement('span');
const gameWin = document.createElement('h1');

score.appendChild(playerScore);
score.appendChild(computerScore);
container.appendChild(theDiv);
container.appendChild(score);
container.appendChild(gameWin);




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
           // lose++;
            return "You Lose! Paper beats Rock!";
        } else {
          // win++;
            return "You Win! Rock beats Scissors!";
        } 
    } else if(playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
          // win++;
            return "You Win! Paper beats Rock!";
        } else if(computerSelection === "PAPER") {
            return "Tie";
        } else {
            //lose++
            return "You Lose! Scissors beats Paper!";
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if(computerSelection === "PAPER") {
            //win++;
            return "You Win! Scissors beats Paper!";
        } else if (computerSelection === "ROCK") {
            //lose++;
            return "You lose! Rock beats Scissors!";
        } else {
            return "Tie";
        } 
        
    }
    console.log(win);
    console.log(lose);
    console.log(playerSelection);

}
const computerSelection = computerPlay();
console.log(computerSelection);

//function game(){
    // for (let i = 0; i < 5; i++){
         //const playerSelection = prompt("Enter rock, scissors or paper!", '');
        //console.log(playerSelection);
        
        const rock = document.querySelector('#rock');

        rock.addEventListener('click',() =>{
        playRound("ROCK", computerPlay() );
       let result = (playRound("Rock", computerPlay()));
        console.log(result);
        resultDisplay.textContent = result;
        container.appendChild(resultDisplay);
        if(result === "You Win! Rock beats Scissors!") {
            win++;
        } else if (result === "You Lose! Paper beats Rock!") {
            lose++;
        } else {
            tie++;
        }
        playerScore.textContent = "Your score: " + win + "  ";
        computerScore.textContent = "Computer's score: " + lose;
        whatIf();
    });
    
    const paper = document.querySelector('#paper');
    
        paper.addEventListener('click',() =>{
        playRound("PAPER", computerPlay() );
      let result = (playRound("PAPER", computerPlay()));
      console.log(result);
      resultDisplay.textContent = result;
      container.appendChild(resultDisplay);
      if(result === "You Win! Paper beats Rock!") {
        win++;
    } else if (result === "You Lose! Scissors beats Paper!") {
        lose++;
    } else {
        tie++;
    }
    playerScore.textContent = "Your score: " + win + "  ";
    computerScore.textContent = "Computer's score: " + lose;
    whatIf();
    
    });
    
    const scissors = document.querySelector('#scissors');
    
        scissors.addEventListener('click',() =>{
        playRound("SCISSORS", computerPlay() );
       let result = (playRound("SCISSORS", computerPlay()));
       console.log(result);
       resultDisplay.textContent = result;
        container.appendChild(resultDisplay);
        if(result === "You Win! Scissors beats Paper!") {
            win++;
        } else if (result === "You lose! Rock beats Scissors!") {
            lose++;
        } else {
            tie++;
        }
        playerScore.textContent = "Your score: " + win + "  ";
        computerScore.textContent = "Computer's score: " + lose;
        whatIf();
    
    }); 

    function whatIf (){
        if (win === 5) {
            gameWin.textContent = "First to five! You win!";
            win = 0;
            lose = 0;
        } else if(lose === 5) {
            gameWin.textContent = "You lost the race to 5! Better luck next time!";
            win = 0;
            lose = 0;
        } else {
            gameWin.textContent = " ";
        }
    };
    
 //ends the for loop
        //console.log(computerSelection);
            

        //alert(playRound(playerSelection, computerSelection));
        //console.log(playRound(playerSelection, computerSelection));
    //}
    
   // if(win>lose){
   //     alert("You won best of 5!");
    //} else if (win<lose) {
      //  alert("You lost best of 5!");

    //} else if (win === lose) {
      //  alert("Tie game!");
    //} else {
      //  alert("I'm lost...");
    //}
//}


//game(); 



console.log(win);
console.log(lose);





