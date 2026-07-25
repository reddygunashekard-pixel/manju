import { useEffect } from "react";
import confetti from "canvas-confetti";

function ConfettiAnimation({
  trigger = false,
  duration = 1800,
  particleCount = 80
}) {

  useEffect(() => {

    if (!trigger) return;

    const colors = [
      "#ff4fa3",
      "#7c4dff",
      "#ffd166",
      "#06d6a0",
      "#ffffff",
      "#4cc9f0"
    ];

    // Initial celebration
    confetti({
      particleCount,
      spread: 90,
      startVelocity: 30,
      scalar: 0.9,
      gravity: 1.1,
      colors
    });

    // Small side bursts
    const interval = setInterval(() => {

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        scalar: 0.8,
        startVelocity: 18,
        colors
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        scalar: 0.8,
        startVelocity: 18,
        colors
      });

    }, 250);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };

  }, [trigger, duration, particleCount]);

  return null;
}

export default ConfettiAnimation;