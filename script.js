let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNr = Math.random();
  console.log('randomNr: ' + randomNr);

  if (randomNr > 0.7) {
    return 'rock';
  } else if (randomNr > 0.4) {
      return 'paper';
  } else {
      return 'scissors';      
  }
}

function getHumanChoice() {
  let humanChoice = prompt('1 = rock, 2 = paper, 3 = scissors', '1');
  
  switch (humanChoice) {
    case '1':
      return 'rock';
  
    case '2':
       return 'paper';

    case '3':
      return 'scissors';
      

    default:
      return 'error';
  }
}

function playRound(humanChoice,ComputerChoice) {
  let human = humanChoice.toUpperCase();
  let computer = ComputerChoice.toUpperCase();
  console.log('Human: ' + human);
  console.log('Computer: ' + computer);

  if (human === computer) {
    return 'tie';
  }
  if (
    (human === 'ROCK' && computer === 'SCISSORS') ||
    (human === 'SCISSORS' && computer === 'PAPER') ||
    (human === 'PAPER' && computer === 'ROCK')
  ) {
    humanScore++
    return ' Human';
  }
  if (
    (computer === 'ROCK' && human === 'SCISSORS') ||
    (computer === 'SCISSORS' && human === 'PAPER') ||
    (computer === 'PAPER' && human === 'ROCK')
  ) {
    computerScore++
    return ' Computer';
  }
}

function playGame() {
  console.log('Winner: ' +playRound(getHumanChoice(), getComputerChoice()));
  console.log('Human score: ' + humanScore);
  console.log('Computer score: ' + computerScore);

}

//console.log(getComputerChoice());
//console.log(getHumanChoice());
//console.log(playRound(getHumanChoice(), getComputerChoice()));
//console.log('Human score: ' + humanScore);
//console.log('Computer score: ' + computerScore);
playGame();
playGame();
playGame();
playGame();
playGame();
