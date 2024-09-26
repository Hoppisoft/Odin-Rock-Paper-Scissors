function getComputerChoice() {
  let randomNr = Math.random();
  console.log('randomNr: ' + randomNr);

  if (randomNr > 0.7) {
    console.log(1);
    return 'rock';
  } else if (randomNr > 0.4) {
    console.log(2);    
    return 'paper';
  } else {
    console.log(3);  
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
      return 'scissor';
      

    default:
      return 'error';
  }
}

//console.log(getComputerChoice());
console.log(getHumanChoice());
