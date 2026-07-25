import "./PuzzlePiece.css";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function PuzzlePiece({

    piece,

    image,

    gridSize,

    highlight

}) {

    const {

        attributes,

        listeners,

        setNodeRef,

        transform,

        transition,

        isDragging

    } = useDraggable({

        id: piece.id,

        data: piece

    });

    const size = 100 / (gridSize - 1);

    return (

        <div

            ref={setNodeRef}

            {...listeners}

            {...attributes}

            className={`

                puzzlePiece

                ${highlight ? "hintPiece" : ""}

                ${piece.placed ? "placedPiece" : ""}

            `}

            style={{

                transform: CSS.Translate.toString(transform),

                transition,

                opacity: isDragging ? .45 : 1,

                zIndex: isDragging ? 1000 : 1,

                backgroundImage: `url(${image})`,

                backgroundSize: `${gridSize * 100}%`,

                backgroundPosition:

                    `${piece.correctCol * size}% ${piece.correctRow * size}%`

            }}

        >

            <div className="pieceOverlay"/>

        </div>

    );

}

export default PuzzlePiece;