const tableOne = document.getElementById('table1');
const tableTwo = document.getElementById('table2');
const tableThree = document.getElementById('table3');
const tableFour = document.getElementById('table4');
const tableFive = document.getElementById('table5');
const tableSix = document.getElementById('table6');
const tableSeven = document.getElementById('table7');
const tableEight = document.getElementById('table8');
const tableNine = document.getElementById('table9');
const playerTurn = document.getElementById('playerTurn');
// Player 1 Win Conditions
let tableOneValue = 0;
let tableTwoValue = 0;
let tableThreeValue = 0;
let tableFourValue = 0;
let tableFiveValue = 0;
let tableSixValue = 0;
let tableSevenValue = 0;
let tableEightValue = 0;
let tableNineValue = 0;

// Player 2 Win Conditions
let tableOneValueO = 0;
let tableTwoValueO = 0;
let tableThreeValueO = 0;
let tableFourValueO = 0;
let tableFiveValueO = 0;
let tableSixValueO = 0;
let tableSevenValueO = 0;
let tableEightValueO = 0;
let tableNineValueO = 0;

// Checks Whos Turn
let playerOneTurn = true;

// Checks if game is over
let gameLive = true;


function whichPlayerTurn() {
    if (playerOneTurn === true){
        playerTurn.textContent = "Player 1's Turn"
    } else {
        playerTurn.textContent = "Player 2's Turn"
    }
}

function playerWon (){
    if (tableOneValue && tableTwoValue && tableThreeValue === 1) {
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableOneValue && tableFourValue && tableSevenValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableOneValue && tableFiveValue && tableNineValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableTwoValue && tableFiveValue && tableEightValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableThreeValue && tableSixValue && tableNineValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableFourValue && tableFiveValue && tableSixValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableThreeValue && tableFiveValue && tableSevenValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if(tableSevenValue && tableEightValue && tableNineValue === 1){
        playerTurn.textContent = "Player 1 Win's!"
        gameLive = false;
    } else if (tableOneValueO && tableTwoValueO && tableThreeValueO === 2) {
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableOneValueO && tableFourValueO && tableSevenValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableOneValueO && tableFiveValueO && tableNineValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableTwoValueO && tableFiveValueO && tableEightValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableThreeValueO && tableSixValueO && tableNineValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableFourValueO && tableFiveValueO && tableSixValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if (tableThreeValueO && tableFiveValueO && tableSevenValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    } else if(tableSevenValueO && tableEightValueO && tableNineValueO === 2){
        playerTurn.textContent = "Player 2 Win's!"
        gameLive = false;
    }
};



tableOne.addEventListener("click", () => {
    if (playerOneTurn && gameLive === true){
        tableOne.textContent = "X";
        tableOneValue = 1
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true) {
        tableOne.textContent = "O";
        tableOneValueO = 2
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableTwo.addEventListener("click", () => {
    if (playerOneTurn && gameLive === true){
        tableTwo.textContent = "X";
        tableTwoValue = 1
        playerOneTurn = false;
    } else if(playerOneTurn === false && gameLive === true){ 
        tableTwo.textContent = "O";
        tableTwoValueO = 2
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableThree.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableThree.textContent = "X";
        tableThreeValue = 1
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true){
        tableThree.textContent = "O";
        tableThreeValueO = 2
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableFour.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableFour.textContent = "X";
        tableFourValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true){
        tableFour.textContent = "O";
        tableFourValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableFive.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableFive.textContent = "X";
        tableFiveValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true){
        tableFive.textContent = "O";
        tableFiveValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableSix.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableSix.textContent = "X";
        tableSixValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true) {
        tableSix.textContent = "O";
        tableSixValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableSeven.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableSeven.textContent = "X";
        tableSevenValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true) {
        tableSeven.textContent = "O";
        tableSevenValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableEight.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableEight.textContent = "X";
        tableEightValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true) {
        tableEight.textContent = "O";
        tableEightValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});

tableNine.addEventListener("click", () => {
    if (playerOneTurn === true){
        tableNine.textContent = "X";
        tableNineValue = 1;
        playerOneTurn = false;
    } else if (playerOneTurn === false && gameLive === true) {
        tableNine.textContent = "O";
        tableNineValueO = 2;
        playerOneTurn = true;
    }
    whichPlayerTurn()
    playerWon()
});



