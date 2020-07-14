let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess_Number, secret_Target){
    return Math.abs(guess_Number - secret_Target);
}

function compareGuesses(human_Guess, computer_Guess, secret_Target){

    const humanInput = document.getElementById('human-guess').value;
    if(humanInput < 0 || humanInput > 9){
        alert("number out of range!");
    } else {
        let human_Target = getAbsoluteDistance(human_Guess, secret_Target);
        let computer_Target = getAbsoluteDistance(computer_Guess, secret_Target);
        if(human_Target < computer_Target){
            return true;
        } else if (human_Target > computer_Target){
            return false;
        } else {
            return true;
        }
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}