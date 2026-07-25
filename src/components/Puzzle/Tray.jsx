import "./Tray.css";

import {

    useDroppable

} from "@dnd-kit/core";

import PuzzlePiece from "./PuzzlePiece";

import {

    GRID_SIZE,

    IMAGE_PATH

} from "./puzzleUtils";

function Tray({

    pieces,

    hintPiece

}) {

    const {

        setNodeRef,

        isOver

    } = useDroppable({

        id:"tray"

    });

    return(

        <div

            ref={setNodeRef}

            className={`

            trayContainer

            ${isOver ? "trayHover" : ""}

            `}

        >

            <div className="trayHeader">

                <h2>

                    Puzzle Pieces

                </h2>

                <span>

                    {pieces.length} Left

                </span>

            </div>

            <div className="trayGrid">

                {

                    pieces.map(piece=>(

                        <PuzzlePiece

                            key={piece.id}

                            piece={piece}

                            image={IMAGE_PATH}

                            gridSize={GRID_SIZE}

                            highlight={

                                hintPiece?.id===piece.id

                            }

                        />

                    ))

                }

            </div>

        </div>

    )

}

export default Tray;