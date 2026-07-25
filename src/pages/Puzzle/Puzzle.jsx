import "./Puzzle.css";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

import usePuzzle from "../../components/Puzzle/usePuzzle";
import PuzzleBoard from "../../components/Puzzle/PuzzleBoard";
import Tray from "../../components/Puzzle/Tray";
import Controls from "../../components/Puzzle/Controls";
import VictoryModal from "../../components/Puzzle/VictoryModal";
import PuzzlePiece from "../../components/Puzzle/PuzzlePiece";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import useApp from "../../hooks/useApp";

function Puzzle() {

    const navigate = useNavigate();

    const {

        addFriendshipPoints,
        setPuzzleCompleted,
        updateJourney

    } = useApp();

    const {

        board,
        pieces,
        activePiece,

        moves,
        seconds,
        progress,

        completed,

        hintPiece,
        hintCount,

        showOriginal,

        handleDragStart,
        handleDragEnd,
        handleDragCancel,

        resetPuzzle,
        useHint,
        toggleOriginal

    } = usePuzzle();

    function continueJourney() {

        addFriendshipPoints(100);

        setPuzzleCompleted(true);

        updateJourney(30);

        navigate("/gallery");

    }

    return (

        <div className="puzzlePage">

            <h1>Photo Puzzle ❤️</h1>

            <Controls

                progress={progress}
                moves={moves}
                seconds={seconds}
                hintCount={hintCount}

                onReset={resetPuzzle}
                onHint={useHint}
                onPreview={toggleOriginal}

            />

            <DndContext

                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}

            >

                <div className="puzzleContent">

                    <div className="boardSection">

                        <PuzzleBoard

                            board={board}
                            hintPiece={hintPiece}
                            showOriginal={showOriginal}

                        />

                    </div>

                    <div className="traySection">

                        <Tray

                            pieces={pieces}
                            hintPiece={hintPiece}

                        />

                    </div>

                </div>

                <DragOverlay>

                    {

                        activePiece &&

                        <PuzzlePiece

                            piece={activePiece}
                            overlay

                        />

                    }

                </DragOverlay>

            </DndContext>

            {

                completed &&

                <VictoryModal

                    moves={moves}
                    seconds={seconds}
                    onRestart={resetPuzzle}

                />

            }

            {

                completed &&

                <div

                    style={{

                        marginTop:30,
                        textAlign:"center"

                    }}

                >

                    <AnimatedButton

                        text="Continue ❤️"

                        onClick={continueJourney}

                    />

                </div>

            }

        </div>

    );

}

export default Puzzle;