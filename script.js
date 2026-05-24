let boardState = ["", "", "", "", "", "", "", "", ""];
const ticTacToeGrid = [];
const displayGrid = document.querySelector(".tic-tac-toe-grid");
console.log(displayGrid);
const playerOneScoreDisplay = document.getElementById("player-one-score");
const playerTwoScoreDisplay = document.getElementById("player-two-score");
const result = document.getElementById("result");
const restartRoundButton = document.getElementById("restart-round-button");
const restartGameButton = document.getElementById("restart-game-button");

for (let i = 0; i < 9; i++) { //creates grid squares

    let cell = document.createElement("div");
    cell.classList.add("cell");
    displayGrid.appendChild(cell);
    cell.dataset.id = i;
    ticTacToeGrid.push(cell);


}


const [ one, two, three, 
      four, five, six, 
      seven, eight, nine ] = ticTacToeGrid; //destructs the grid squares 


const player = {

    wins: 1,


    choose(character) {

    let input = character;
    return input;
    
    }
};



const playerOne = Object.create(player);
const playerTwo = Object.create(player);



function checkWinner() {

ticTacToeGrid.forEach(gridcell => {
    gridcell.addEventListener("click", handleCellClick,);
})

restartRoundButton.addEventListener("click", restartRound);

restartGameButton.addEventListener("click", () => {
    window.location.reload();
})

function createWin(a, b, c) {
    return [a.dataset.id, b.dataset.id, c.dataset.id];
}

    const winOne = createWin(one, two, three);
    const winTwo = createWin(four, five, six);
    const winThree = createWin(seven, eight, nine);
    const winFour = createWin(one, four, seven);
    const winFive = createWin(two, five, eight);
    const winSix = createWin(three, six, nine);
    const winSeven = createWin(one, five, nine);
    const winEight = createWin(three, five, seven);

    const winCombos = [
        winOne,
        winTwo,
        winThree,
        winFour,
        winFive,
        winSix,
        winSeven,
        winEight,
    ];

    let playerOneTurn = true;
    let playerTwoTurn = false;
    let X = playerOne.choose("X");
    let O = playerTwo.choose("O");

function updateBoard(gridCell, index) {
    
    if (playerOneTurn) {
        boardState[index] = X;
        gridCell.textContent = X;
        playerOneTurn = false;
        playerTwoTurn = true;
        return;
    }    

    if (playerTwoTurn){
        boardState[index] = O;
        gridCell.textContent = O;
        playerOneTurn = true;
        playerTwoTurn = false;
        return;
    }
    

}

function handleCellClick(event) {

   let clickedCell = event.target;
   let clickedIndex = event.target.dataset.id;
   updateBoard(clickedCell, clickedIndex);

   let roundWon = false;
   let gameIsActive = true;


    for (const combo of winCombos) {
        const [a, b, c] = combo;

        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {



        if(!playerOneTurn){
            playerOneScoreDisplay.textContent = playerOne.wins++;
            console.log("Player One Wins");
            result.textContent = "Player One Wins!";
            gameIsActive = false;
            return;

        } else {
            playerTwoScoreDisplay.textContent = playerTwo.wins++;
            console.log("Player Two Wins");
            result.textContent = "Player Two Wins!";
            gameIsActive = false;
            return;
        }
            console.log("Winner!");
    }

    if (!boardState.includes("")){

        result.textContent = "It's a Draw!";
        gameIsActive = false;
        return;
    }



   
} //end of handleCellClick 

function restartRound(){

boardState = ["", "", "", "", "", "", "", "", ""];
isGameActive = true;
ticTacToeGrid.forEach(cell => cell.textContent = "");
result.textContent = "";

debugger;
}


 
} // end of Check Winner Function




checkWinner();










