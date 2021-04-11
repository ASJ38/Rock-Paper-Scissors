/*
Function computerPlay()
return random r OR p OR s as String (print in Console in Html)
STEPS:
Check for Random Functions in Javascript:
Either find use random numbers oder Random chooser of Array or List
Use Math.floor(Math.random()*Array.length)

const randomElement = array[Math.floor(Math.random() * array.length)];
*/

function computerPlay() {
    let computerChoicePossibilities = ["Rock", "Paper", "Scissors"];
    let randomChoice = randomChoice[Math.floor(Math.random() * randomChoice.length)]
    return randomChoice;
}

/*
Function playOneRound() 
takes 2 input arguments playerSelection and 
computerSelection
return String like "You Lose! Paper beats Rock"
- make input argument playerSelection case insensitive
STEPS:

Draw when equal

if playerSelection == computerSelection DRAW

Rock wins against Scissors
Rock loses against Paper

else if playerSelection == Rock && computerSelection == Scissors PLAYER
else if playerSelection == Rock && computerSelection == Paper COMPUTER

Paper wins against Rocks
Paper loses against Scissors

else if playerSelection == Paper && computerSelection == Rocks PLAYER
else if playerSelection == Paper && computerSelection == Scissors COMPUTER

Scissors wins against Paper
Scissors loses agianst Rocks

else if playerSelection == Scissors && computerSelection == Paper PLAYER
else if playerSelection == Scissors && computerSelection == Rock COMPUTER
*/

function playOneRound(playerSelection, computerSelection) {
    hasPlayerWon = null;
    if (playerSelection == computerSelection) {
        hasPlayerWon = undefined;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        hasPlayerWon = true;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        hasPlayerWon = false;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rocks") {
        hasPlayerWon = true;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        hasPlayerWon = false;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        hasPlayerWon = true;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        hasPlayerWon = false;
    }
    return printGameResults(hasPlayerWon, playerSelection, computerSelection);
}

/*
Write a printGameResults() Function that returns a String based on true or false input parameter and the Selections
example 

if (true)
return "You Win! " + playerSelection+ " beats " + computerSelection;

else
return "You Lose! " + playerSelection+ " beats " + computerSelection;

Use a boolean before the if statment like hasPlayerWon => change the value in the if block

*/


function printGameResults(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon === null) {
        return "Please enter Rock, Paper or Scissors"
    }
    else if (hasPlayerWon === undefined) {
        return "Draw";
    }
    else if (!hasPlayerWon) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (hasPlayerWon) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

/*

Function game()
execute PlayOneRound 5 times
save results of the round and return winner as String


INPUT
Use prompt to get User input (playerSelection) for playOneRound


*/

