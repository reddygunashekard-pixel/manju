import { useEffect, useState } from "react";

import {
  createBoard,
  createPieces,
  shufflePieces,
  calculateProgress,
  checkVictory,
  getHint,
} from "./puzzleUtils";

export default function usePuzzle() {

  const [pieces, setPieces] = useState([]);
  const [board, setBoard] = useState(createBoard());

  const [activePiece, setActivePiece] = useState(null);

  const [moves, setMoves] = useState(0);

  const [seconds, setSeconds] = useState(0);

  const [progress, setProgress] = useState(0);

  const [completed, setCompleted] = useState(false);

  const [hintPiece, setHintPiece] = useState(null);

  const [hintCount, setHintCount] = useState(3);

  const [showOriginal, setShowOriginal] = useState(false);

  /* --------------------------
      Initialize
  ---------------------------*/

  useEffect(() => {

    resetPuzzle();

  }, []);

  /* --------------------------
      Timer
  ---------------------------*/

  useEffect(() => {

    if (completed) return;

    const timer = setInterval(() => {

      setSeconds(prev => prev + 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [completed]);

  /* --------------------------
      Progress
  ---------------------------*/

  useEffect(() => {

    const p = calculateProgress(board);

    setProgress(p);

    if (checkVictory(board)) {

      setCompleted(true);

    }

  }, [board]);

  /* --------------------------
      Reset
  ---------------------------*/

  function resetPuzzle() {

    setPieces(

      shufflePieces(

        createPieces()

      )

    );

    setBoard(createBoard());

    setMoves(0);

    setSeconds(0);

    setCompleted(false);

    setHintPiece(null);

    setHintCount(3);

    setActivePiece(null);

  }

  /* --------------------------
      Drag Start
  ---------------------------*/

  function handleDragStart(event) {

    setActivePiece(

      event.active.data.current

    );

  }

  /* --------------------------
      Drag Cancel
  ---------------------------*/

  function handleDragCancel() {

    setActivePiece(null);

  }

  /* --------------------------
      Drag End
  ---------------------------*/

  function handleDragEnd(event) {

    const { active, over } = event;

    setActivePiece(null);

    if (!over) return;

    const piece = active.data.current;

    /* ---------------------
       Drop to Tray
    ----------------------*/

    if (over.id === "tray") {

      removeFromBoard(piece.id);

      return;

    }

    /* ---------------------
       Drop to Cell
    ----------------------*/

    if (

      typeof over.id === "string" &&

      over.id.startsWith("cell-")

    ) {

      const [, row, col] = over.id.split("-");

      placeOnBoard(

        piece,

        Number(row),

        Number(col)

      );

    }

  }

  /* --------------------------
      Place Piece
  ---------------------------*/

  function placeOnBoard(

    piece,

    row,

    col

  ) {

    const newBoard =

      board.map(r => [...r]);

    if (

      newBoard[row][col]

    ) {

      return;

    }

    newBoard[row][col] = {

      ...piece,

      placed: true,

      row,

      col

    };

    setBoard(newBoard);

    setPieces(prev =>

      prev.filter(

        p => p.id !== piece.id

      )

    );

    setMoves(prev => prev + 1);

  }

  /* --------------------------
      Remove Piece
  ---------------------------*/

  function removeFromBoard(id) {

    const newBoard =

      board.map(r => [...r]);

    let removed = null;

    newBoard.forEach(row => {

      row.forEach((piece, col) => {

        if (

          piece?.id === id

        ) {

          removed = {

            ...piece,

            placed: false,

            row: piece.correctRow,

            col: piece.correctCol

          };

          row[col] = null;

        }

      });

    });

    if (!removed) return;

    setBoard(newBoard);

    setPieces(prev => [

      ...prev,

      removed

    ]);

    setMoves(prev => prev + 1);

  }

  /* --------------------------
      Hint
  ---------------------------*/

  function useHint() {

    if (

      hintCount <= 0 ||

      completed

    ) return;

    const hint = getHint(pieces);

    setHintPiece(hint);

    setHintCount(prev => prev - 1);

    setTimeout(() => {

      setHintPiece(null);

    }, 2500);

  }

  /* --------------------------
      Toggle Original
  ---------------------------*/

  function toggleOriginal() {

    setShowOriginal(

      prev => !prev

    );

  }

  return {

    pieces,

    board,

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

  };

}