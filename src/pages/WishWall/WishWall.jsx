import "./WishWall.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import WishWall from "../../components/WishWall/WishWall";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import useApp from "../../hooks/useApp";

function WishWallPage() {

    const navigate = useNavigate();

    const {
        addFriendshipPoints,
        setWishWallCompleted,
        updateJourney,
        unlockFinal
    } = useApp();

    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const [wishes, setWishes] = useState([
        "❤️ Happy Birthday Manju",
        "🌸 Stay happy forever",
        "🎂 Keep smiling Tyson",
        "✨ Dreams come true",
        "💖 Best Friend Forever"
    ]);

    function submitWish() {

        if (!message.trim()) {
            alert("Please write your birthday wish ❤️");
            return;
        }

        setSending(true);

        setTimeout(() => {

            localStorage.setItem("birthdayWish", message);

            setWishes(prev => [
                `💌 ${message}`,
                ...prev
            ]);

            addFriendshipPoints(100);
            setWishWallCompleted(true);
            updateJourney(90);
            unlockFinal();

            setSubmitted(true);
            setMessage("");
            setSending(false);

        }, 1000);

    }

   function continueJourney() {

    window.scrollTo(0, 0);

    navigate("/finale", {
        replace: true
    });

    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });

}

    return (

        <section className="wishPage">

            <FloatingHearts />

            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                💌 Birthday Wish Wall
            </motion.h1>

            <p>
                Every wish written with love lasts forever.
            </p>

            <WishWall wishes={wishes} />

            {!submitted && (
                <>
                    <div className="wishInput">

                        <textarea
                            placeholder="Write your birthday wish here ❤️"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                        />

                    </div>

                    <AnimatedButton
                        text={sending ? "Sending..." : "Post My Wish 💌"}
                        onClick={submitWish}
                    />
                </>
            )}

            <AnimatePresence>

                {submitted && (

                    <motion.div
                        className="successCard"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <h1>🎉 Happy Birthday Tyson ❤️</h1>

                        <p>
                            Your birthday wish has been posted successfully.
                            <br /><br />
                            Thank you for making Tyson's birthday even more special.
                            <br /><br />
                            ❤️ Happy Birthday Tyson ❤️
                        </p>

                        <AnimatedButton
                            text="Grand Finale ✨"
                            onClick={continueJourney}
                        />

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    );

}

export default WishWallPage;