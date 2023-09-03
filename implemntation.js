function getComputerChoice (){
    choice = ['rock',' paper', 'scissors'];

    return choice[Math.floor(Math.random() * choice.length)];
}

function stringReturn (result, computerSelection, playerSelection) {
    if (result === `win`){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result === `tie`){
        return `Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection};`
    }
}

function singleRound (computerSelection, playerSelection){
    if(computerSelection === 'rock'){
        if(playerSelection === 'paper'){
            return stringReturn('win', computerSelection,playerSelection);
        }
        else if(playerSelection === 'scissors'){
            return stringReturn('lose', computerSelection,playerSelection);
        }
        else if(playerSelection === 'tie'){
            return stringReturn('tie',computerSelection,playerSelection);
        }
    }
    else if(computerSelection === 'paper'){
        if(playerSelection === 'scissors'){
            return stringReturn('win',computerSelection,playerSelection);
        }
        else if(playerSelection === 'rock'){
            return stringReturn('lose'.computerSelection,playerSelection);
        }
        else if(playerSelection === 'tie'){
            return stringReturn('tie',computerSelection,playerSelection);
        }
    }
    else if(computerSelection === 'scissors'){
        if(playerSelection === 'rock'){
            return stringReturn('win',computerSelection,playerSelection);
        }
        else if(playerSelection === 'paper'){
            return stringReturn('lose',computerSelection,playerSelection);
        }
        else if(playerSelection === 'scissors'){
            return stringReturn('tie',computerSelection,playerSelection);
        }
    }
}

let flag = false

function game(flag){
    while(!flag){
        playerSelection = prompt('Please input your choice: ');
        computerSelection = getComputerChoice();

        console.log(`You choose: ${playerSelection.toLowerCase()}`);
        console.log(`Computer choose: ${computerSelection.toLowerCase()}`);

        console.log(singleRound(computerSelection.toLowerCase(),playerSelection.toLowerCase()));
        let continueORNot = prompt('Do you want to play another round?  ');
        if (continueORNot.toLowerCase() === 'yes'){
            flag = true;
        }
        else {
            flag = false;
            console.log('Thank for playing this game!');
        }
    }   
}

game(flag);


