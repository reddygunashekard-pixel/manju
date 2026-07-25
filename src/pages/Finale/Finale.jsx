import "./Finale.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import AuroraBackground from "../../components/AuroraBackground/AuroraBackground";
import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import FloatingStars from "../../components/FloatingStars/FloatingStars";
import Fireworks from "../../components/Fireworks/Fireworks";
import ConfettiAnimation from "../../components/ConfettiAnimation/ConfettiAnimation";
import Gallery from "../../components/Gallery/Gallery";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

import useApp from "../../hooks/useApp";

function Finale() {

    const {

        friendshipPoints

    } = useApp();

    const images = [

        "/images/gallery/1.jpg",

        "/images/gallery/2.jpg",

        "/images/gallery/3.jpg",

        "/images/gallery/4.jpg",

        "/images/gallery/5.jpg",

        "/images/gallery/6.jpg"

    ];

    const [currentImage,setCurrentImage]=useState(0);

    useEffect(()=>{

        const timer=setInterval(()=>{

            setCurrentImage(prev=>

                (prev+1)%images.length

            );

        },3500);

        return()=>clearInterval(timer);

    },[]);

    return(

<section className="finalePage">

<AuroraBackground/>

<FloatingStars/>

<FloatingHearts/>

<Fireworks trigger/>

<ConfettiAnimation trigger/>

<MusicPlayer/>

<div className="overlay"/>

<div className="content">

<motion.h3

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:1}}

>

✨ Congratulations Tyson ✨

</motion.h3>

<motion.h1

initial={{

opacity:0,

scale:.7

}}

animate={{

opacity:1,

scale:1

}}

transition={{

delay:.5,

duration:1

}}

>

Happy Birthday

Manju ❤️

</motion.h1>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:1.2}}

>

Today is not just about celebrating your birthday.

It's about celebrating the amazing person you are.

Thank you for every laugh,

every memory,

every conversation,

every moment,

and for always being an incredible friend.

No matter where life takes us,

you'll always be

<strong> Tyson ❤️ </strong>

to me.

</motion.p>

<div className="scoreCard">

<h2>

Friendship Score

</h2>

<h1>

{"1000%"}/1000% ❤️

</h1>

</div>

<div className="slideshow">

<img

src={images[currentImage]}

alt="memory"

/>

</div>

<div className="endingCard">

<h2>

💌 One Last Letter

</h2>

<p>

Dear Manju,

I don't know what tomorrow brings,

but I know one thing for sure.

I'm grateful that life gave me a friend like you.

May your smile never fade,

may your dreams always come true,

and may happiness follow you

every single day.

Thank you for being part of my life.

Happy Birthday once again.

❤️ Forever Your Friend ❤️

</p>

</div>

<motion.h2

className="ending"

animate={{

scale:[1,1.05,1]

}}

transition={{

repeat:Infinity,

duration:3

}}

>

🎂 The End...

or simply

the beginning of

many more beautiful memories ❤️

</motion.h2>

</div>

</section>

    )

}

export default Finale;