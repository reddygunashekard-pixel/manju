import "./Letters.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import SecretLetter from "../../components/SecretLetter/SecretLetter";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import useApp from "../../hooks/useApp";

function Letters() {

    const navigate = useNavigate();

    const {

        addFriendshipPoints,
        setLettersCompleted,
        updateJourney

    } = useApp();

    const letters = [

        {
            title:"The Beginning ❤️",
            content:
            "Dear Tyson,\n\nThank you for coming into my life. Our friendship started as something simple but became one of the best parts of my journey."
        },

        {
            title:"Your Smile 😊",
            content:
            "Your smile has a way of making difficult days feel lighter. Never stop smiling because it truly suits you."
        },

        {
            title:"Thank You 🌸",
            content:
            "Thank you for your support, your kindness, your patience and for always being there when it mattered the most."
        },

        {
            title:"My Wish 🎂",
            content:
            "I wish your life is filled with happiness, success, good health and countless unforgettable memories."
        },

        {
            title:"Forever Tyson ❤️",
            content:
            "No matter where life takes us, you'll always be Tyson to me and I'll always treasure our friendship."
        },

        {
            title:"Happy Birthday 🎉",
            content:
            "Happy Birthday Manju ❤️\n\nMay this year be your happiest one yet.\nYou deserve every beautiful thing life has to offer."
        }

    ];

    const [opened,setOpened]=useState(null);

    function continueJourney(){

        addFriendshipPoints(100);

        setLettersCompleted(true);

        updateJourney(50);

        navigate("/meter");

    }

    return(

<section className="lettersPage">

<h1>

Secret Letters ❤️

</h1>

<p>

Each envelope holds a small piece of my heart.

</p>

<div className="lettersGrid">

{

letters.map((letter,index)=>(

<motion.div

key={index}

whileHover={{

scale:1.08,

rotate:-3

}}

whileTap={{

scale:.95

}}

className="envelope"

onClick={()=>setOpened(letter)}

>

💌

<h3>

Letter {index+1}

</h3>

</motion.div>

))

}

</div>

<AnimatePresence>

{

opened &&

<motion.div

className="letterModal"

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setOpened(null)}

>

<motion.div

className="letterCard"

initial={{

scale:.7,

rotateY:90

}}

animate={{

scale:1,

rotateY:0

}}

exit={{

scale:.8,

opacity:0

}}

onClick={(e)=>e.stopPropagation()}

>

<SecretLetter

title={opened.title}

content={opened.content}

/>

</motion.div>

</motion.div>

}

</AnimatePresence>

<div className="letterButton">

<AnimatedButton

text="Continue ❤️"

onClick={continueJourney}

/>

</div>

</section>

    )

}

export default Letters;