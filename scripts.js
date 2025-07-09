function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // create 2d array to represent board
    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    // getter for board (helpful for UI rendering)
    const getBoard = () => board;

    // logic for placing a token (X or O)
    const placeToken(row, column, player) {
        if (board[row][column].getValue() === "") {
            board[row][column].addToken(player);
        } else {
            // the chosen cell is not available 
            return;
        }
    }

    // logic for printing the board (for console gameplay)
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }
}

function Cell() {
    let value = "";

    // accept a player's token and set it to X or O
    const addToken = (player) => {
        value - player;
    }

    // getter to retrieve value of cell
    const getValue = () => value;

    return {
        addToken,
        getValue
    };
}