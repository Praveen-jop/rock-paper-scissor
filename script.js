console.log('This is a rock paper scissor game')

// const R = 'rock'
// const P = 'paper'
// const S = 'scissor'

// function getcomputerchoice(){
//     let num = Math.floor((Math.random() * 100) + 1);
//     let choice
//     if(num>=10 && num<30){
//         choice = 'rock'
//     }
//     else if(num>=30 && num<65){
//         choice = 'paper'
//     }
//     else{
//         choice = 'scissor'
//     }
//     return choice
// }

// function gethumanchoice(){
//     value = prompt("Choose any one [Rock,Paper,Scissor]", "Type here")
//     value = value.toUpperCase()
//     let choice
//     if(value == "ROCK"){
//         choice = 'rock'
//     }
//     else if(value == "PAPER"){
//         choice = 'paper'
//     }
//     else if(value == "SCISSOR"){
//         choice = 'scissor'
//     }
//     else{
//         console.log("type correct choice!")
//         choice = 0
//     }
//     return choice
// }

// let human_point = 0
// let computer_point = 0
// let i = 1
// while(i<3){
//     console.log("Round: "+i)
//     human = gethumanchoice()
//     if(human == 0){
//         continue
//     }
//     comp = getcomputerchoice()
//     console.log("Your choice: "+ human)
//     console.log("Computer choice: "+ comp)

//     // game
//     if(human == 'paper' && comp == 'scissor'){
//         computer_point++
//         console.log("Computer got a point!")
//     }
//     else if(human == 'scissor' && comp == 'rock'){
//         computer_point++
//         console.log("Computer got a point!")
//     }
//     else if(human == 'rock' && comp == 'paper'){
//         computer_point++
//         console.log("Computer got a point!")
//     }
//     else if(comp == 'paper' && human == 'scissor'){
//         human_point++
//         console.log("You won! you got a point!")
//     }
//     else if(comp == 'scissor' && human == 'rock'){
//         human_point++
//         console.log("You won! you got a point!")
//     }
//     else if(comp == 'rock' && human == 'paper'){
//         human_point++
//         console.log("You won! you got a point!")
//     }
//     else{
//         console.log("it's a tie, round will repeat once again")  
//         continue      
//     }
//     console.log("Scores after round: "+i+" is:")
//     console.log("You:"+human_point,", Computer:"+computer_point)
//     i++

// }
// console.log("Game Over!")
// if(human_point > computer_point){
//     console.log("congratulations! You Won the game!")
// }
// else{
//     console.log("sorry! Computer won the game.")
// }




let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie';
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++;
      roundWinner = 'player';
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++;
      roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
  }
  
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'ROCK';
      case 1:
        return 'PAPER';
      case 2:
        return 'SCISSORS';
    }
  }
  
function isGameOver() {
    return playerScore === 5 || computerScore === 5;
  }
  
const scoreInfo = document.querySelector('#scoreInfo');
const scoreMessage = document.querySelector('#scoreMsg');
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore');
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')


rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal();
      return;
    }
  
    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();
  
    if (isGameOver()) {
      openEndgameModal();
      setFinalMessage();
    }
  }
  
  function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'ROCK':
        playerSign.textContent = '✊';
        break;
      case 'PAPER':
        playerSign.textContent = '✋';
        break;
      case 'SCISSORS':
        playerSign.textContent = '✌';
        break;
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerSign.textContent = '✊';
        break;
      case 'PAPER':
        computerSign.textContent = '✋';
        break;
      case 'SCISSORS':
        computerSign.textContent = '✌';
        break;
    }
  }

  
function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!';
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!';
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
  }
  
function capitalizeFirstLetter(string) {
    if (!string) return ""; // Handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`;
      return;
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`;
      return;
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`;
  }

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }