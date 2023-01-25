let humanSelection;
let computerSelection;
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 0;
let roundResult;
let choiceButtons = document.querySelectorAll('.choices>button');
let round = document.querySelector('.round');
let roundResults = document.querySelector('.round-results');
let gameScore = document.querySelector('.game-score');
let resetGameButton = document.querySelector('.reset-game');
let humanChoice = document.querySelector('.human-choice > .human-choice');
let computerChoice = document.querySelector('.computer-choice > .computer-choice');
let roundWins = document.querySelector('input');

function getRandomInteger (){
    //returns random integer between 1 and 3
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function getComputerChoice (){
    let randomInteger = getRandomInteger()
    if (randomInteger === 1){
        return 'Rock';
    }
    else if (randomInteger === 2){
        return 'Scissors';
    }
    else if (randomInteger === 3){
        return 'Paper';
    }
    else return "Something went horribly wrong with getting the computer's choice.";
}

// function gethumanSelection() {
//     return prompt('rock, paper, or scissors?','rock');
// }

function playRound (e){
    //humanSelection = gethumanSelection();
    humanSelection = e.target.classList.value;
     if (humanSelection==='Rock'||humanSelection ==='Scissors'||humanSelection ==='Paper'){
        roundCount++;
        round.textContent = `Round: ${roundCount}`;
        computerSelection = getComputerChoice();
        showChoices();
        roundResult = getRoundResult();
        roundResults.textContent = showRoundResults(roundResult);
        updateGameScore(roundResult);
        gameScore.textContent = showGameMessage ();
         updateRoundWinsStatus();
    }
    else return 'invalid selection'
};

function updateRoundWinsStatus(){
    if (roundCount ===0){
        roundWins.disabled=false;
    }
    else roundWins.disabled=true;
};

function updateGameScore (roundResult) {
    if (roundResult==='human Wins') return ++humanScore;
    else if (roundResult==='computer Wins') return ++computerScore;
    else if (roundResult==='tie') return ++tieScore;
}

function showGameMessage(){
    if (humanScore >= parseInt(roundWins.value)){
        disableChoices();
        return `You won the game! human score = ${humanScore}, computer score = ${computerScore}, ties = ${tieScore}`
    }
    else if (computerScore >= parseInt(roundWins.value)){
        disableChoices();
        return `You lost the game! human score = ${humanScore}, computer score = ${computerScore}, ties = ${tieScore}`;
    }
    else return `human score = ${humanScore}, computer score = ${computerScore}, ties = ${tieScore}`;

};
function disableChoices(){
    choiceButtons.forEach(button => button.disabled=true);
};
function enablechoices(){
    choiceButtons.forEach(button => button.disabled=false);
};

function showChoices (){     
    humanChoice.textContent = `${humanSelection}!`
    computerChoice.textContent = `${computerSelection}!`
};
function getRoundResult (){
    switch  (true){
        //ties
        case humanSelection === computerSelection:
            return 'tie';
            break;
        
        //human wins
        case humanSelection === 'Rock'  && computerSelection === 'Scissors':
        case humanSelection === 'Paper' && computerSelection === 'Rock':
        case humanSelection === 'Scissors' && computerSelection === 'Paper':
            return 'human Wins';
            break;
        
        //human loses
        case humanSelection === 'Rock'  && computerSelection === 'Paper':
        case humanSelection === 'Paper' && computerSelection === 'Scissors':
        case humanSelection === 'Scissors' && computerSelection === 'Rock':
            return 'computer Wins';
            break;
            
        default:
            return 'Something went horribly wrong here...'
    }
};

function showRoundResults (roundResult){
    if  (roundResult==='tie'){
        return `Tie! ${humanSelection} ties ${computerSelection}`;
    }
    else if (roundResult==='human Wins'){
        return `You win! ${humanSelection} beats ${computerSelection}`;
    }
    else if (roundResult==='computer Wins'){
        return `You lose! ${humanSelection} beats ${computerSelection}`;
    }
    else return 'Something went horribly wrong here...';
};

choiceButtons.forEach(button => button.addEventListener('click',playRound));
resetGameButton.addEventListener('click',resetGame);

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    roundCount = 0;
    humanSelection = '';
    computerSelection = '';
    roundResult = '';
    round.textContent = 'Round:';
    humanChoice.textContent = '';
    computerChoice.textContent = '';
    roundResults.textContent = '';
    gameScore.textContent = '';
    enablechoices();
    updateRoundWinsStatus();
}
// function game(){

// for (let i = 0; i < 5; i++) {

//     console.log(playRound(humanSelection,computerSelection));
//     console.log(`computer score = ${computerScore}, human score = ${humanScore}`);
// }
// showGameWinner();
// resetScores();
// }

// function showGameWinner(){

//     if (computerScore == humanScore){
//         console.log(`It's a tie game!`);
//     }

//     else if (computerScore < humanScore){
//         console.log (`You win!`);
//     }

//     else console.log (`You lose :(`)

// }
// function resetScores(){
//     humanScore = 0;
//     computerScore = 0;

// }