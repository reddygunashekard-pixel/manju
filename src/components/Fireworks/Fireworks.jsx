import { useEffect } from "react";
import confetti from "canvas-confetti";

function Fireworks({

    trigger = false,

    duration = 7000

}) {

    useEffect(() => {

        if (!trigger) return;

        const end = Date.now() + duration;

        const colors = [

            "#ff4fa3",
            "#ffffff",
            "#ffd166",
            "#06d6a0",
            "#4cc9f0",
            "#7c4dff",
            "#ef476f",
            "#f72585"

        ];

        const randomFirework = () => {

            confetti({

                particleCount: 180,

                angle: 90,

                spread: 120,

                startVelocity: 60,

                ticks: 250,

                gravity: 0.8,

                origin: {

                    x: Math.random(),

                    y: Math.random() * 0.45

                },

                colors,

                scalar: 1.2

            });

        };

        randomFirework();

        const interval = setInterval(() => {

            randomFirework();

        }, 700);

        const timer = setTimeout(() => {

            clearInterval(interval);

        }, duration);

        return () => {

            clearInterval(interval);

            clearTimeout(timer);

        };

    }, [trigger, duration]);

    return null;

}

export default Fireworks;