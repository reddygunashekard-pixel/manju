import puzzleImage from "../../assets/images/puzzle/M2.jpeg";

export const GRID_SIZE = 5;

export const TOTAL_PIECES = GRID_SIZE * GRID_SIZE;

export const IMAGE_PATH = puzzleImage;

/*
----------------------------------------
Create Solved Pieces
----------------------------------------
*/

export function createPieces() {

    const pieces = [];

    for (let row = 0; row < GRID_SIZE; row++) {

        for (let col = 0; col < GRID_SIZE; col++) {

            pieces.push({

                id: row * GRID_SIZE + col,

                row,

                col,

                correctRow: row,

                correctCol: col,

                placed: false

            });

        }

    }

    return pieces;

}

/*
----------------------------------------
Shuffle
----------------------------------------
*/

export function shufflePieces(pieces) {

    const array = [...pieces];

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(

            Math.random() * (i + 1)

        );

        [array[i], array[j]] =

            [array[j], array[i]];

    }

    return array;

}

/*
----------------------------------------
Correct Position
----------------------------------------
*/

export function isCorrectPosition(

    piece,

    row,

    col

) {

    return (

        piece.correctRow === row &&

        piece.correctCol === col

    );

}

/*
----------------------------------------
Board
----------------------------------------
*/

export function createBoard() {

    return Array(GRID_SIZE)

        .fill(null)

        .map(() =>

            Array(GRID_SIZE).fill(null)

        );

}

/*
----------------------------------------
Progress
----------------------------------------
*/

export function calculateProgress(board) {

    let correct = 0;

    board.forEach(row => {

        row.forEach(piece => {

            if (

                piece &&

                piece.row === piece.correctRow &&

                piece.col === piece.correctCol

            ) {

                correct++;

            }

        });

    });

    return Math.floor(

        (correct / TOTAL_PIECES) * 100

    );

}

/*
----------------------------------------
Victory
----------------------------------------
*/

export function checkVictory(board) {

    for (

        let row = 0;

        row < GRID_SIZE;

        row++

    ) {

        for (

            let col = 0;

            col < GRID_SIZE;

            col++

        ) {

            const piece = board[row][col];

            if (!piece) return false;

            if (

                piece.correctRow !== row ||

                piece.correctCol !== col

            ) {

                return false;

            }

        }

    }

    return true;

}

/*
----------------------------------------
Format Time
----------------------------------------
*/

export function formatTime(seconds) {

    const min = Math.floor(seconds / 60);

    const sec = seconds % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

}

/*
----------------------------------------
Hint
----------------------------------------
*/

export function getHint(pieces) {

    const remaining = pieces.filter(

        piece => !piece.placed

    );

    if (!remaining.length) return null;

    return remaining[

        Math.floor(

            Math.random() * remaining.length

        )

    ];

}

/*
----------------------------------------
Reset Pieces
----------------------------------------
*/

export function resetPieces() {

    return shufflePieces(

        createPieces()

    );

}