var turn = 1;
var boxes = document.getElementsByClassName("box");
var board = Array(9).fill(null);

function clicked(event) {
    var box = event.target; 
    var index = box.getAttribute('data-index');

    if (box.innerHTML === "" && !checkWin()) {
        if (turn == 1) {
            box.innerHTML = "X";
            board[index] = "X";
            turn = 2;   
        } else {
            box.innerHTML = "O"; 
            board[index] = "O";
            turn = 1;
        }

        if (checkWin()) {
            setTimeout(() => {
            alert(`Player ${turn === 2 ? 'X' : 'O'} wins!`);
            console.log(`Player ${turn === 2 ? 'X' : 'O'} wins!`);
            removeAllEventListeners();
            },10);
        } else if (board.every(cell => cell !== null)) {
            
            setTimeout(() => {
                alert('It\'s a tie!');
                        console.log('It\'s a tie!');
                        removeAllEventListeners();
            },10);
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

Array.from(boxes).forEach(box => {
    box.addEventListener("click", clicked);
});
