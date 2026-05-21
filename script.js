const boardState = ["", "", "", "", "", "", "", "", ""];
const ticTacToeGrid = [];
const displayGrid = document.querySelector(".tic-tac-toe-grid");
console.log(displayGrid);

for (let i = 0; i < 9; i++) { //creates grid squares

    let cell = document.createElement("div");
    cell.classList.add("cell");
    displayGrid.appendChild(cell);
    cell.dataset.id = i;
    ticTacToeGrid.push(cell);

}

console.log(ticTacToeGrid);

const [ one, two, three, 
      four, five, six, 
      seven, eight, nine ] = ticTacToeGrid; //destructs the grid squares 


const player = {

    wins: 0,
    losses: 0,

    choose(character) {

    let input = character;
    return input;
    
    }
};



const playerOne = Object.create(player);
const playerTwo = Object.create(player);



function checkWinner() {

    

function createWin(a, b, c) {
    return {a, b, c};
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

    console.log(winCombos);
    let roundWon = false;


    /*for (const combo of winCombos){
      const combos = Object.values(combo);
       console.log(combos);

       const [a, b, c] = combos;

       


    }*/

    for (let i = 0; i < winCombos.length; i++){

        //console.log(winCombos[i]);
       const combos = Object.values(winCombos[i]);
       console.log(combos);

    } // end of for loop */



    let playerOneTurn = true;
    let playerTwoTurn = false;

function updateBoard(gridCell, index) {
    

    if (playerOneTurn) {
        boardState[index] = String(index);
        gridCell.textContent = playerOne.choose("X")
        playerOneTurn = false;
        playerTwoTurn = true;
        return;
    }    

    if (playerTwoTurn){
        boardState[index] = String(index);
        gridCell.textContent = playerTwo.choose("O");
        playerOneTurn = true;
        PlayerTwoTurn = false;
        return;
    }
    

}

function handleCellClick(event) {

   let clickedCell = event.target;
   let clickedIndex = event.target.dataset.id;
   console.log(clickedCell);
   console.log(clickedIndex);

   updateBoard(clickedCell, clickedIndex);
   //console.log(boardState);

   for (const combo of winCombos) {
      const arrayOfCombos = Object.values(combo);
       console.log(arrayOfCombos);

       //const [a, b, c] = arrayOfCombos;

       const matches = arrayOfCombos.filter(value => {
            return boardState.includes(value);
       })

       if (matches){

        console.log("player Wins");
       }

    
          console.log(boardState);
    }
   
}

ticTacToeGrid.forEach(gridcell => {
    gridcell.addEventListener("click", handleCellClick, {once: true});
})

 
} // end of Check Winner Function




checkWinner();















