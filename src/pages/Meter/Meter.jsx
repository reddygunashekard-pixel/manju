import "./Meter.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FriendshipMeter from "../../components/FriendshipMeter/FriendshipMeter";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import useApp from "../../hooks/useApp";

function Meter() {

    const navigate = useNavigate();

    const {

        addFriendshipPoints,
        setMeterCompleted,
        updateJourney

    } = useApp();

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {

        let value = 0;

        const timer = setInterval(() => {

            value++;

            setPercentage(value);

            if (value >= 100) {

                clearInterval(timer);

            }

        }, 25);

        return () => clearInterval(timer);

    }, []);

    function continueJourney() {

        addFriendshipPoints(100);

        setMeterCompleted(true);

        updateJourney(60);

        navigate("/wheel");

    }

    function getMessage() {

        if (percentage < 30)
            return "Every friendship starts with a hello ❤️";

        if (percentage < 60)
            return "Our memories made us stronger 🌸";

        if (percentage < 90)
            return "Thank you for always being there 💖";

        return "100% Forever Friends ❤️";

    }

    return (

        <section className="meterPage">

            <FloatingHearts/>

            <motion.h1

                initial={{opacity:0,y:-50}}

                animate={{opacity:1,y:0}}

            >

                Friendship Meter ❤️

            </motion.h1>

            <motion.p

                initial={{opacity:0}}

                animate={{opacity:1}}

                transition={{delay:.4}}

            >

                Some friendships are temporary.

                Ours is forever.

            </motion.p>

            <FriendshipMeter

                value={percentage}

            />

            <motion.h2

                className="percentage"

                animate={{

                    scale:[1,1.05,1]

                }}

                transition={{

                    repeat:Infinity,

                    duration:2

                }}

            >

                {percentage}%

            </motion.h2>

            <motion.div

                className="meterMessage"

                key={percentage}

                initial={{opacity:0}}

                animate={{opacity:1}}

            >

                {getMessage()}

            </motion.div>

            {

                percentage===100 &&

                <AnimatedButton

                    text="Continue ❤️"

                    onClick={continueJourney}

                />

            }

        </section>

    );

}

export default Meter;