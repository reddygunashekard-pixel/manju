import "./PuzzleBoard.css";
import { motion } from "framer-motion";
import { useDroppable } from "@dnd-kit/core";

import PuzzlePiece from "./PuzzlePiece";
import { GRID_SIZE, IMAGE_PATH } from "./puzzleUtils";

function BoardCell({

    row,
    col,
    piece,
    hintPiece

}) {

    const {

        setNodeRef,
        isOver

    } = useDroppable({

        id: `cell-${row}-${col}`,

        data: {

            row,
            col

        }

    });

    const isHintCell =
        hintPiece &&
        hintPiece.correctRow === row &&
        hintPiece.correctCol === col &&
        !piece;

    return (

        <motion.div

            layout

            ref={setNodeRef}

            className={`
                boardCell
                ${isOver ? "cellHover" : ""}
                ${piece ? "filledCell" : ""}
                ${isHintCell ? "hintCell" : ""}
            `}

        >

            {

                piece && (

                    <PuzzlePiece

                        piece={piece}

                        image={IMAGE_PATH}

                        gridSize={GRID_SIZE}

                        highlight={

                            hintPiece?.id === piece.id

                        }

                    />

                )

            }

        </motion.div>

    );

}

function PuzzleBoard({

    board,
    hintPiece,
    showOriginal

}) {

    return (

        <motion.div

            layout

            className="boardWrapper"

        >

            <div className="puzzleBoard">

                {

                    board.map((row, rowIndex) =>

                        row.map((piece, colIndex) => (

                            <BoardCell

                                key={`${rowIndex}-${colIndex}`}

                                row={rowIndex}

                                col={colIndex}

                                piece={piece}

                                hintPiece={hintPiece}

                            />

                        ))

                    )

                }

            </div>

            {

                showOriginal && (

                    <div className="previewOverlay">

                        <img

                            src={IMAGE_PATH}

                            alt="Original Puzzle"

                            className="previewImage"

                        />

                    </div>

                )

            }

        </motion.div>

    );

}

export default PuzzleBoard;