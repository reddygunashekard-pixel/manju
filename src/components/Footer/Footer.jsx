import { useEffect, useRef } from "react";
import birthdayMusic from "../../assets/audio/birthday.mp3";

function MusicPlayer() {

  const audioRef = useRef(null);

  useEffect(() => {

    audioRef.current = new Audio(birthdayMusic);

    audioRef.current.loop = true;

    audioRef.current.volume = 0.35;

    const playMusic = () => {

      audioRef.current
        .play()
        .catch(() => {});

      document.removeEventListener(
        "click",
        playMusic
      );

    };

    // Try autoplay
    audioRef.current.play().catch(() => {

      // Browser blocked autoplay.
      // Play after first user interaction.
      document.addEventListener(
        "click",
        playMusic,
        { once: true }
      );

    });

    return () => {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

    };

  }, []);

  return null;

}

export default MusicPlayer;