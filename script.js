const ticTacToeGrid = [];

for (let i = 1; i<= 9; i++) { //creates grid squares

    let gridCellValue = i;
    ticTacToeGrid.push(gridCellValue);

}

console.log(ticTacToeGrid);

const [ one, two, three, 
      four, five, six, 
      seven, eight, nine ] = ticTacToeGrid; //destructs the grid squares 


const player = {

    wins: 0,
    losses: 0,

    choose() {

    let input = prompt("Choose your square bud");
    return input;
    
    }
};



const playerOne = Object.create(player);
const playerTwo = Object.create(player);


function checkWinner(playerOneInput, playerTwoInput){


function createWin(a, b, c){

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

winCombos.forEach(combo => {
    
    Object.values(combo).forEach(value =>{
        
        console.log(value);
    })
})

    let inputOfPlayerOne = playerOneInput;
    let inputOfPlayerTwo = playerTwoInput;
   

} // end of Check Winner Function







checkWinner();
















