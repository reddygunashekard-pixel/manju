import "./Wheel.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FriendshipWheel from "../../components/FriendshipWheel/FriendshipWheel";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import ConfettiAnimation from "../../components/ConfettiAnimation/ConfettiAnimation";
import useApp from "../../hooks/useApp";

const rewards = [

    "❤️ Best Friend Forever",

    "👑 Birthday Queen",

    "🎁 Surprise Gift",

    "🌍 Dream Trip",

    "🍫 Chocolate Time",

    "🎬 Movie Night",

    "💌 Hidden Letter",

    "😊 Sweet Smile"

];

function Wheel() {

    const navigate = useNavigate();

    const {

        addFriendshipPoints,
        setWheelCompleted,
        updateJourney

    } = useApp();

    const [spinning, setSpinning] = useState(false);

    const [completed, setCompleted] = useState(false);

    const [result, setResult] = useState("");

    function spinWheel() {

        if (spinning || completed) return;

        setSpinning(true);

        const reward =
            rewards[Math.floor(Math.random() * rewards.length)];

        setTimeout(() => {

            setResult(reward);

            setCompleted(true);

            setSpinning(false);

            addFriendshipPoints(100);

            setWheelCompleted(true);

            updateJourney(70);

        }, 5000);

    }

    function continueJourney() {

        navigate("/cake");

    }

    return (

        <section className="wheelPage">

            {

                completed &&

                <ConfettiAnimation trigger />

            }

            <motion.h1

                initial={{

                    opacity:0,
                    y:-40

                }}

                animate={{

                    opacity:1,
                    y:0

                }}

            >

                Friendship Wheel ❤️

            </motion.h1>

            <motion.p

                initial={{

                    opacity:0

                }}

                animate={{

                    opacity:1

                }}

                transition={{

                    delay:.3

                }}

            >

                Spin the magical wheel and discover
                today's special surprise for Tyson ❤️

            </motion.p>

            <FriendshipWheel

                spinning={spinning}

            />

            {

                !completed ?

                <AnimatedButton

                    text={

                        spinning

                        ?

                        "🎡 Spinning..."

                        :

                        "Spin The Wheel ❤️"

                    }

                    onClick={spinWheel}

                />

                :

                <>

                    <motion.div

                        className="rewardCard"

                        initial={{

                            opacity:0,

                            scale:.5

                        }}

                        animate={{

                            opacity:1,

                            scale:1

                        }}

                        transition={{

                            duration:.5

                        }}

                    >

                        <h2>

                            🎉 Congratulations Tyson!

                        </h2>

                        <h3>

                            {result}

                        </h3>

                        <p>

                            Every spin reminds me how lucky
                            I am to have a friend like you ❤️

                        </p>

                    </motion.div>

                    <AnimatedButton

                        text="Continue ❤️"

                        onClick={continueJourney}

                    />

                </>

            }

        </section>

    );

}

export default Wheel;