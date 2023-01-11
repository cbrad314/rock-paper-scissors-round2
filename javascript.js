let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getRandomInteger (){
    //returns random integer between 1 and 3
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function getComputerChoice (){
    let randomInteger = getRandomInteger()
    if (randomInteger === 1){
        return 'rock';
    }
    else if (randomInteger === 2){
        return 'scissors';
    }
    else if (randomInteger === 3){
        return 'paper';
    }
    else return "Something went horribly wrong with getting the computer's choice.";
}

function getPlayerSelection() {
    return prompt('rock, paper, or scissors?','rock');
}

function playRound (){
    playerSelection = getPlayerSelection();
    if (playerSelection.toLowerCase() ==='rock'||playerSelection ==='scissors'||playerSelection ==='paper'){
        computerSelection = getComputerChoice();
        switch  (true){
            //ties
            case playerSelection === computerSelection:
                return `Tie! ${playerSelection} ties ${computerSelection}`
                break;

            //player wins
            case playerSelection === 'rock'  && computerSelection === 'scissors':
            case playerSelection === 'paper' && computerSelection === 'rock':
            case playerSelection === 'scissors' && computerSelection === 'paper':
                playerScore +=1;
                return `You win! ${playerSelection} beats ${computerSelection}`
                break;

            //player loses
            case playerSelection === 'rock'  && computerSelection === 'paper':
            case playerSelection === 'paper' && computerSelection === 'scissors':
            case playerSelection === 'scissors' && computerSelection === 'rock':
                computerScore +=1;
                return `You lose! ${playerSelection} beats ${computerSelection}`
                break;
                
            default:
                return 'Something went horribly wrong here...'
        }
    }
    else return 'invalid selection'
};


function game(){

for (let i = 0; i < 5; i++) {

    console.log(playRound(playerSelection,computerSelection));
    console.log(`computer score = ${computerScore}, player score = ${playerScore}`);
}
showGameWinner();
resetScores();
}

function showGameWinner(){

    if (computerScore == playerScore){
        console.log(`It's a tie game!`);
    }

    else if (computerScore < playerScore){
        console.log (`You win!`);
    }

    else console.log (`You lose :(`)

}
function resetScores(){
    playerScore = 0;
    computerScore = 0;

}


