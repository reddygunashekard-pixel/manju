import { useState, useMemo } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {

    const [friendshipPoints, setFriendshipPoints] = useState(0);

    const [journeyProgress, setJourneyProgress] = useState(0);

    const [musicPlaying, setMusicPlaying] = useState(false);

    const [currentPage, setCurrentPage] = useState("home");

    const [quizCompleted, setQuizCompleted] = useState(false);

    const [puzzleCompleted, setPuzzleCompleted] = useState(false);

    const [galleryCompleted, setGalleryCompleted] = useState(false);

    const [lettersCompleted, setLettersCompleted] = useState(false);

    const [meterCompleted, setMeterCompleted] = useState(false);

    const [wheelCompleted, setWheelCompleted] = useState(false);

    const [cakeCompleted, setCakeCompleted] = useState(false);

    const [wishWallCompleted, setWishWallCompleted] = useState(false);

    const [finalUnlocked, setFinalUnlocked] = useState(false);

    function addFriendshipPoints(points) {

        setFriendshipPoints(prev => prev + points);

    }

    function updateJourney(progress) {

        setJourneyProgress(progress);

    }

    function unlockFinal() {

        if (

            quizCompleted &&

            puzzleCompleted &&

            galleryCompleted &&

            lettersCompleted &&

            meterCompleted &&

            wheelCompleted &&

            cakeCompleted &&

            wishWallCompleted

        ) {

            setFinalUnlocked(true);

        }

    }

    const value = useMemo(() => ({

        friendshipPoints,

        addFriendshipPoints,

        journeyProgress,

        updateJourney,

        musicPlaying,

        setMusicPlaying,

        currentPage,

        setCurrentPage,

        quizCompleted,

        setQuizCompleted,

        puzzleCompleted,

        setPuzzleCompleted,

        galleryCompleted,

        setGalleryCompleted,

        lettersCompleted,

        setLettersCompleted,

        meterCompleted,

        setMeterCompleted,

        wheelCompleted,

        setWheelCompleted,

        cakeCompleted,

        setCakeCompleted,

        wishWallCompleted,

        setWishWallCompleted,

        finalUnlocked,

        unlockFinal

    }), [

        friendshipPoints,

        journeyProgress,

        musicPlaying,

        currentPage,

        quizCompleted,

        puzzleCompleted,

        galleryCompleted,

        lettersCompleted,

        meterCompleted,

        wheelCompleted,

        cakeCompleted,

        wishWallCompleted,

        finalUnlocked

    ]);

    return (

        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>

    );

}

export default AppProvider;