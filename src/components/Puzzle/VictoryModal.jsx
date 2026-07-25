import "./VictoryModal.css";
import { motion, AnimatePresence } from "framer-motion";
import ConfettiAnimation from "../ConfettiAnimation/ConfettiAnimation";
import Fireworks from "../Fireworks/Fireworks";
import { formatTime, IMAGE_PATH } from "./puzzleUtils";

function VictoryModal({

    open,

    moves,

    seconds,

    onContinue

}) {

    return (

        <AnimatePresence>

            {

                open && (

                    <>

                        <ConfettiAnimation trigger={true} />

                        <Fireworks trigger={true} />

                        <motion.div

                            className="victoryOverlay"

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                        >

                            <motion.div

                                className="victoryCard"

                                initial={{

                                    scale: .5,

                                    opacity: 0,

                                    rotate: -8

                                }}

                                animate={{

                                    scale: 1,

                                    opacity: 1,

                                    rotate: 0

                                }}

                                exit={{

                                    scale: .6,

                                    opacity: 0

                                }}

                                transition={{

                                    duration: .6,

                                    type: "spring"

                                }}

                            >

                                <div className="victoryEmoji">

                                    🎉

                                </div>

                                <h1>

                                    Memory Completed ❤️

                                </h1>

                                <p>

                                    Tyson, you completed our beautiful memory.

                                </p>

                                <img

                                    src={IMAGE_PATH}

                                    alt="Completed Puzzle"

                                />

                                <div className="resultGrid">

                                    <div>

                                        <span>🎯 Moves</span>

                                        <h2>

                                            {moves}

                                        </h2>

                                    </div>

                                    <div>

                                        <span>⏱ Time</span>

                                        <h2>

                                            {formatTime(seconds)}

                                        </h2>

                                    </div>

                                    <div>

                                        <span>❤️ Friendship</span>

                                        <h2>

                                            +100

                                        </h2>

                                    </div>

                                </div>

                                <motion.button

                                    whileHover={{

                                        scale:1.05

                                    }}

                                    whileTap={{

                                        scale:.95

                                    }}

                                    className="continueButton"

                                    onClick={onContinue}

                                >

                                    Continue Journey →

                                </motion.button>

                            </motion.div>

                        </motion.div>

                    </>

                )

            }

        </AnimatePresence>

    );

}

export default VictoryModal;