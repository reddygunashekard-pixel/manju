import "./Puzzle.css";
import { useMemo } from "react";
import PuzzlePiece from "./PuzzlePiece";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import puzzleImage from "../../assets/images/puzzle/M2.jpeg";

const GRID = 4;

function shuffle(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }

    return arr;

}

function Puzzle() {

    const pieces = useMemo(() => {

        const list = [];

        for (let row = 0; row < GRID; row++) {

            for (let col = 0; col < GRID; col++) {

                list.push({

                    id: row * GRID + col,

                    row,

                    col

                });

            }

        }

        return shuffle(list);

    }, []);

    return (

        <DndProvider backend={HTML5Backend}>

            <section className="puzzlePage">

                <h1>🧩 Memory Puzzle</h1>

                <p>
                    Tyson ❤️ Arrange all 16 pieces correctly.
                </p>

                <div className="puzzleWrapper">

                    {/* Left Side - Puzzle Board */}

                    <div className="leftSection">

                        <h2>Puzzle Board</h2>

                        <div className="board">

                            {

                                [...Array(GRID * GRID)].map((_, index) => (

                                    <div
                                        key={index}
                                        className="boardCell"
                                    />

                                ))

                            }

                        </div>

                    </div>

                    {/* Right Side - Tray */}

                    <div className="rightSection">

                        <div className="trayHeader">

                            <h2>Puzzle Pieces</h2>

                            <span>

                                {pieces.length} Pieces

                            </span>

                        </div>

                        <div className="pieceContainer">

                            {

                                pieces.map(piece => (

                                    <PuzzlePiece

                                        key={piece.id}

                                        piece={piece}

                                        image={puzzleImage}

                                        grid={GRID}

                                    />

                                ))

                            }

                        </div>

                    </div>

                </div>

                {/* Image Preview */}

                <div className="previewSection">

                    <h2>Reference Image</h2>

                    <img

                        src={puzzleImage}

                        alt="Reference"

                        className="previewImage"

                    />

                </div>

            </section>

        </DndProvider>

    );

}

export default Puzzle;