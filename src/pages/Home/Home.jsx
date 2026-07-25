import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import AuroraBackground from "../../components/AuroraBackground/AuroraBackground";
import FloatingStars from "../../components/FloatingStars/FloatingStars";
import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import BalloonAnimation from "../../components/BalloonAnimation/BalloonAnimation";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";

// Change this import to the correct path of your MusicPlayer.jsx
import { startMusic } from "../../components/MusicPlayer/MusicPlayer";

import useApp from "../../hooks/useApp";

function Home() {

    const navigate = useNavigate();

    const {
        updateJourney,
        setCurrentPage
    } = useApp();

    function startJourney() {

        // Start background music
        startMusic();

        // Update progress
        updateJourney(10);

        setCurrentPage("quiz");

        // Navigate
        navigate("/quiz");
    }

    return (

        <section className="home">

            <AuroraBackground />

            <FloatingStars />

            <FloatingHearts />

            <BalloonAnimation />

            <div className="overlay" />

            <motion.div

                className="hero"

                initial={{
                    opacity: 0,
                    y: 80
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 1
                }}

            >

                <motion.h2

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: 0.4 }}

                >

                    Happy Birthday

                </motion.h2>

                <motion.h1

                    initial={{
                        scale: 0.6,
                        opacity: 0
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{
                        delay: 0.8,
                        type: "spring"
                    }}

                >

                    Manju ❤️

                </motion.h1>

                <motion.h3

                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 1.3
                    }}

                >

                    You'll Always Be Tyson To Me

                </motion.h3>

                <motion.p

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: 1.8 }}

                >

                    Today isn't just another birthday.
                    <br /><br />

                    It's a celebration of an amazing friend,
                    unforgettable memories,
                    countless laughs,
                    and the beautiful journey we've shared.

                </motion.p>

                <motion.div

                    className="buttonContainer"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 2.3
                    }}

                >

                    <AnimatedButton

                        text="Start The Journey ❤️"

                        onClick={startJourney}

                    />

                </motion.div>

            </motion.div>

        </section>

    );

}

export default Home;