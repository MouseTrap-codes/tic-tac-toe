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
    const placeToken = (row, column, player) => {
        if (board[row][column].getValue() === "") {
            board[row][column].addToken(player);
            return true;
        } else {
            // the chosen cell is not available 
            return false;
        }
    }

    // logic for printing the board (for console gameplay)
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }

    // public api
    return {getBoard, placeToken, printBoard};
}

function Cell() {
    let value = "";

    // accept a player's token and set it to X or O
    const addToken = (player) => {
        value = player;
    }

    // getter to retrieve value of cell
    const getValue = () => value;

    return {
        addToken,
        getValue
    };
}

function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ]

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const winConditionMet = function() {
            let won = false;

            // 1) current player has filled an entire row
            const filledRow = board.getBoard().some((row) => {
                const [a, b, c] = row.map(cell => cell.getValue());
                return a !== "" && a === b && a === c && a === getActivePlayer().token;
            })

            // 2) if current player has filled an entire column
            const filledColumn = function() {
                let columnFilled = false;
                const boardState = board.getBoard();
                
                // loop through each column
                for (let col = 0; col < boardState[0].length; col++) {
                    let firstRowVal = boardState[0][col].getValue();
                    let secondRowVal = boardState[1][col].getValue();
                    let thirdRowVal =boardState[2][col].getValue();
                    if (firstRowVal === getActivePlayer().token &&
                        firstRowVal === secondRowVal &&
                        secondRowVal === thirdRowVal) {
                            columnFilled = true;
                    }
                }

                return columnFilled;
            }

            // 3) if current player has filled a diagonal
            const filledDiagonal = function() {
                const boardState = board.getBoard();
                return (
                    boardState[0][0].getValue() === boardState[1][1].getValue() &&  boardState[1][1].getValue() === boardState[2][2].getValue() && boardState[2][2].getValue() === getActivePlayer().token 
                    ||
                    boardState[2][0].getValue() === boardState[1][1].getValue() &&  boardState[1][1].getValue() === boardState[0][2].getValue() && boardState[0][2].getValue() === getActivePlayer().token 
                );
            }

            // draw detection -> if board is full and won is false
            const detectDraw = function() {
                let numEmpty = 0;
                let boardState = board.getBoard();
                for (let i = 0; i < boardState.length; i++) {
                    for (let j = 0; j < boardState[0].length; j++) {
                        if (boardState[i][j].getValue() === "") {
                            numEmpty++;
                        }
                    }
                }

                if (numEmpty === 0) {
                    return "draw";
                }

                return "keep playing";
            }

            let toReturn;

            won = filledRow || filledColumn() || filledDiagonal();
            if (won) {
                toReturn = "won";
            } else {
                toReturn = detectDraw();
            }

            return toReturn;

        }

    const playRound = (row, column) => {
        // place a token for current player
        console.log(`Placing ${getActivePlayer().name}'s ${getActivePlayer().token} into row ${row}, column ${column}`);
        const success = board.placeToken(row, column, getActivePlayer().token);
        if (!success) {
            console.log("Invalid move. Cell already taken.");
            return;
        }
        
         // win conditions here!!!
        let winCondition = winConditionMet();
        if (winCondition === "won") {
            console.log(`${getActivePlayer().name} has won!!!`);
            return;
        } else if (winCondition === "draw") {
            console.log(`The game is a draw!`);
            return
        }
        
        // switch player turn
        switchPlayerTurn();
        printNewRound();
    }

   

    // initial play game message
    printNewRound();

    return {
        playRound, 
        getActivePlayer
    };
}

const game = GameController();
