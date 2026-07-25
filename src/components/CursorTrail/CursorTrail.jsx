import { useEffect } from "react";
import "./CursorTrail.css";

function CursorTrail() {

  useEffect(() => {

    const createParticle = (x, y) => {

      const particle = document.createElement("span");

      particle.className = "cursorParticle";

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const emojis = [
        "✨",
        "⭐",
        "💖",
        "🌸"
      ];

      particle.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200);

    };

    const handleMove = (e) => {

      createParticle(e.clientX, e.clientY);

    };

    const handleClick = (e) => {

      for (let i = 0; i < 12; i++) {

        setTimeout(() => {

          createParticle(
            e.clientX + (Math.random() - .5) * 120,
            e.clientY + (Math.random() - .5) * 120
          );

        }, i * 40);

      }

    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);

    };

  }, []);

  return null;
}

export default CursorTrail;