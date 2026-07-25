import { useEffect } from "react";
import { Howl } from "howler";

let birthdayMusic = null;

function createPlayer() {

    if (birthdayMusic) return birthdayMusic;

    birthdayMusic = new Howl({

        src: ["/music/birthday.mp3"],

        preload: true,

        html5: false,

        loop: true,

        volume: 0.15

    });

    return birthdayMusic;

}

function MusicPlayer() {

    useEffect(() => {

        const player = createPlayer();

        const shouldPlay =
            localStorage.getItem("music-enabled") === "true";

        function unlockAndPlay() {

            if (shouldPlay && !player.playing()) {

                player.play();

            }

            window.removeEventListener("click", unlockAndPlay);
            window.removeEventListener("touchstart", unlockAndPlay);
            window.removeEventListener("keydown", unlockAndPlay);

        }

        window.addEventListener("click", unlockAndPlay);
        window.addEventListener("touchstart", unlockAndPlay);
        window.addEventListener("keydown", unlockAndPlay);

        return () => {

            window.removeEventListener("click", unlockAndPlay);
            window.removeEventListener("touchstart", unlockAndPlay);
            window.removeEventListener("keydown", unlockAndPlay);

        };

    }, []);

    return null;

}

export function startMusic() {

    const player = createPlayer();

    localStorage.setItem("music-enabled", "true");

    if (!player.playing()) {

        player.play();

    }

}

export function pauseMusic() {

    if (!birthdayMusic) return;

    localStorage.setItem("music-enabled", "false");

    birthdayMusic.pause();

}

export function stopMusic() {

    if (!birthdayMusic) return;

    localStorage.setItem("music-enabled", "false");

    birthdayMusic.stop();

}

export default MusicPlayer;