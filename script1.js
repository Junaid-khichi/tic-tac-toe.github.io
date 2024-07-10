




// const gameInfo = document.querySelector('.game-info');
// const boxes = document.querySelectorAll('.box');
// const newGameBtn = document.querySelector('.new-game-btn');

// // decide the current player
// let currentPlayer;

// // All possible combinations to win
// const winningPositions = [
//     // horizontal
//     [0, 1, 2], 
//     [3, 4, 5], 
//     [6, 7, 8], 
//     // vertical
//     [0, 3, 6],
//     [1, 4, 7], 
//     [2, 5, 8], 
//     // diagonal
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// let gameGrid;
// let leftFirst = true;
// let rightfirst = true;
// // Initialize the game
// function initGame(){
//     leftFirst = false;
//     rightfirst = true;
//     currentPlayer = 'x';
//     gameGrid = ["", "", "", "", "", "", "", "", ""];

//     boxes.forEach((box, index) => {
//         box.innerText = "";
//         box.style.pointerEvents = "all";
//         box.classList.remove("win");
//     });

//     // gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
//     gameInfo.innerText = "Let's Play";
//     newGameBtn.classList.remove("active");
    
    
//         xmove();
    
// }

// initGame();

// // event listener for each box
// boxes.forEach((box, index) => {
//     box.addEventListener('click', () => {
//         handleClick(index);
//     });
// });

// function handleClick(index){
//     if(gameGrid[index] === ""){
//         boxes[index].innerText = currentPlayer.toUpperCase();
//         boxes[index].style.pointerEvents = "none";
//         gameGrid[index] = currentPlayer;
//         // checking game is over or not
//         checkGameOver();
        
//         // swapping player's turn
//         swapTurn();
//         // gameGrid[0] = "x";
//         if(currentPlayer === 'x') {
//             xmove();
//         }
//     }
// }

// // AI function to automate X's turn
// function xmove(){
//     let bestMove = -1;
//     bestMove = wincheck('x');
//     if (bestMove !== -1) {
//         handleClick(bestMove);
//         return;
//     }

//     bestMove = wincheck('o');
//     if (bestMove !== -1) {
//         handleClick(bestMove);
//         return;
//     }
//     if(leftFirst === false && gameGrid[4]==="" &&rightfirst ===false ){
//         // leftFirst = true;
//         rightfirst = true;
//         handleClick(4);
//         return;
//     }
//     // First, check if X can win in the next move
    

//     // Second, check if O can win in the next move and block it
    

//     // Otherwise, pick the first available box
//     for (let i = 0; i < 9; i++) {
//         if (gameGrid[i] === "") {
//             rightfirst = false;
//             handleClick(i);
//             return;
//         }
//     }
// }

// // Function to find the best move for the given player if x or o is winning or not

// function wincheck(player) {
//     for (let position of winningPositions) {
//         const [a, b, c] = position;
//         if (gameGrid[a] === player && gameGrid[b] === player && gameGrid[c] === "") return c;
//         if (gameGrid[a] === player && gameGrid[b] === "" && gameGrid[c] === player) return b;
//         if (gameGrid[a] === "" && gameGrid[b] === player && gameGrid[c] === player) return a;
//     }
//     return -1;
// }

// // swap player turns
// function swapTurn(){
//     currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
//     // gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
// }

// function checkGameOver(){
//     let winner = "";
//     // checking if any player matches the winning combinations
//     winningPositions.forEach((position) => {
//         if(gameGrid[position[0]] != "" && 
//             gameGrid[position[1]] != "" && 
//             gameGrid[position[2]] != "" && 
//             gameGrid[position[0]] === gameGrid[position[1]] &&
//             gameGrid[position[1]] === gameGrid[position[2]]
//         ){
//             boxes.forEach((box) => {
//                 box.style.pointerEvents = "none";
//             });

//             winner = gameGrid[position[0]];
//             boxes[position[0]].classList.add("win");
//             boxes[position[1]].classList.add("win");
//             boxes[position[2]].classList.add("win");
//         }
//     });

//     // checks if we get the winner
//     if(winner !== ""){
//         gameInfo.innerText = `Winner - ${winner.toUpperCase()}`;
//         newGameBtn.classList.add("active");
//         return;
//     }

//     // checks if its a draw
//     let allBoxesFilled = true;
//     gameGrid.forEach((box) => {
//         if(box === ""){
//             allBoxesFilled = false;
//         }
//     });

//     if(allBoxesFilled){
//         gameInfo.innerText = `It's a Draw`;
//         newGameBtn.classList.add("active");
//     }
// }

// newGameBtn.addEventListener('click', initGame);


const twoPlayerBtn1 = document.getElementById('two-player1');
const computerBtn1 = document.getElementById('computer1');

const gameInfo = document.querySelector('.game-info');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.new-game-btn');
const choiceSection = document.querySelector('.choice');
const twoPlayerBtn = document.getElementById('two-player');
const computerBtn = document.getElementById('computer');
const gameWrapper = document.querySelector('.wrapper');

// Game mode state
let isTwoPlayer = false;

// Event listeners for choice buttons
twoPlayerBtn.addEventListener('click', () => {
    isTwoPlayer = true;
    startGame();
});

computerBtn.addEventListener('click', () => {
    isTwoPlayer = false;
    startGame();
});
twoPlayerBtn1.addEventListener('click', () => {
    isTwoPlayer = true;
    startGame();
});

computerBtn1.addEventListener('click', () => {
    isTwoPlayer = false;
    startGame();
});

function startGame() {
    choiceSection.style.display = 'none';
    gameWrapper.style.display = 'grid';
    initGame();
}

// Initialize the game
let currentPlayer;
const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];
let gameGrid;
let leftFirst = true;
let rightfirst = true;

function initGame(){
    leftFirst = false;
    rightfirst = true;
    currentPlayer = 'x';
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box, index) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.classList.remove("win");
    });

    gameInfo.innerText = "Let's Play";
    newGameBtn.classList.remove("active");
    twoPlayerBtn1.classList.remove("active");
    computerBtn1.classList.remove("active");
    
    if (!isTwoPlayer) {
        xmove();
    }
}

initGame();

// Event listener for each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer.toUpperCase();
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = currentPlayer;
        checkGameOver();
        swapTurn();
        if(currentPlayer === 'x' && !isTwoPlayer) {
            xmove();
        }
    }
}

// AI function to automate X's turn
function xmove(){
    let bestMove = -1;
    bestMove = wincheck('x');
    if (bestMove !== -1) {
        handleClick(bestMove);
        return;
    }

    bestMove = wincheck('o');
    if (bestMove !== -1) {
        handleClick(bestMove);
        return;
    }
    if(leftFirst === false && gameGrid[4]==="" &&rightfirst ===false ){
        rightfirst = true;
        handleClick(4);
        return;
    }
    for (let i = 0; i < 9; i++) {
        if (gameGrid[i] === "") {
            rightfirst = false;
            handleClick(i);
            return;
        }
    }
}

function wincheck(player) {
    for (let position of winningPositions) {
        const [a, b, c] = position;
        if (gameGrid[a] === player && gameGrid[b] === player && gameGrid[c] === "") return c;
        if (gameGrid[a] === player && gameGrid[b] === "" && gameGrid[c] === player) return b;
        if (gameGrid[a] === "" && gameGrid[b] === player && gameGrid[c] === player) return a;
    }
    return -1;
}

function swapTurn(){
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    
}

function checkGameOver(){
    let winner = "";
    winningPositions.forEach((position) => {
        if(gameGrid[position[0]] != "" && 
            gameGrid[position[1]] != "" && 
            gameGrid[position[2]] != "" && 
            gameGrid[position[0]] === gameGrid[position[1]] &&
            gameGrid[position[1]] === gameGrid[position[2]]
        ){
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            winner = gameGrid[position[0]];
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    if(winner !== ""){
        gameInfo.innerText = `Winner - ${winner.toUpperCase()}`;
        newGameBtn.classList.add("active");
        twoPlayerBtn1.classList.add("active");
        computerBtn1.classList.add("active");
        return;
    }

    let allBoxesFilled = true;
    gameGrid.forEach((box) => {
        if(box === ""){
            allBoxesFilled = false;
        }
    });

    if(allBoxesFilled){
        gameInfo.innerText = `It's a Draw`;
        newGameBtn.classList.add("active");
        twoPlayerBtn1.classList.add("active");
        computerBtn1.classList.add("active");
    }
}

newGameBtn.addEventListener('click', initGame);
