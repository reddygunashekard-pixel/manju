import "./Controls.css";
import { motion } from "framer-motion";
import { formatTime } from "./puzzleUtils";

function Controls({

    moves,

    seconds,

    progress,

    hintCount,

    showOriginal,

    toggleOriginal,

    useHint,

    resetPuzzle

}) {

    return (

        <motion.div

            className="controls"

            initial={{

                opacity:0,

                y:30

            }}

            animate={{

                opacity:1,

                y:0

            }}

        >

            <div className="stats">

                <div className="statCard">

                    <span>⏱ Time</span>

                    <h2>

                        {formatTime(seconds)}

                    </h2>

                </div>

                <div className="statCard">

                    <span>🎯 Moves</span>

                    <h2>

                        {moves}

                    </h2>

                </div>

                <div className="statCard">

                    <span>❤️ Progress</span>

                    <h2>

                        {progress}%

                    </h2>

                </div>

            </div>

            <div className="progressBar">

                <motion.div

                    className="progressFill"

                    animate={{

                        width:`${progress}%`

                    }}

                    transition={{

                        duration:.5

                    }}

                />

            </div>

            <div className="buttonContainer">

                <button

                    className="hint"

                    onClick={useHint}

                    disabled={hintCount===0}

                >

                    💡 Hint ({hintCount})

                </button>

                <button

                    className="preview"

                    onClick={toggleOriginal}

                >

                    {

                        showOriginal ?

                        "🙈 Hide Image"

                        :

                        "👁 Show Image"

                    }

                </button>

                <button

                    className="reset"

                    onClick={resetPuzzle}

                >

                    🔄 Reset

                </button>

            </div>

        </motion.div>

    );

}

export default Controls;