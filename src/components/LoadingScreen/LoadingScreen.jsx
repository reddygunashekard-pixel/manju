import "./LoadingScreen.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setProgress((prev) => {

                if (prev >= 100) {

                    clearInterval(timer);

                    setTimeout(() => {

                        if (onComplete) {

                            onComplete();

                        }

                    }, 800);

                    return 100;

                }

                return prev + 1;

            });

        }, 35);

        return () => clearInterval(timer);

    }, [onComplete]);

    return (

        <AnimatePresence>

            <motion.div

                className="loadingScreen"

                initial={{ opacity: 1 }}

                exit={{ opacity: 0 }}

                transition={{ duration: .8 }}

            >

                <motion.div

                    className="gift"

                    animate={{

                        y: [0, -10, 0],

                        rotate: [-2, 2, -2]

                    }}

                    transition={{

                        duration: 2,

                        repeat: Infinity

                    }}

                >

                    <div className="giftLid"></div>

                    <div className="giftRibbonVertical"></div>

                    <div className="giftRibbonHorizontal"></div>

                    <div className="giftBox"></div>

                    <div className="giftBowLeft"></div>

                    <div className="giftBowRight"></div>

                </motion.div>

                <motion.h1

                    className="loadingTitle"

                    initial={{ opacity: 0, y: 20 }}

                    animate={{ opacity: 1, y: 0 }}

                >

                    Preparing A Surprise

                </motion.h1>

                <p className="loadingText">

                    Just for Manju ❤️

                </p>

                <div className="progressContainer">

                    <motion.div

                        className="progressFill"

                        animate={{

                            width: `${progress}%`

                        }}

                    />

                </div>

                <span className="progressValue">

                    {progress}%

                </span>

                <div className="sparkles">

                    {Array.from({ length: 25 }).map((_, index) => (

                        <span

                            key={index}

                            className="sparkle"

                            style={{

                                left: `${Math.random() * 100}%`,

                                top: `${Math.random() * 100}%`,

                                animationDelay: `${Math.random() * 4}s`

                            }}

                        >

                            ✨

                        </span>

                    ))}

                </div>

            </motion.div>

        </AnimatePresence>

    );

}

export default LoadingScreen;