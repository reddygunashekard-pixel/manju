import "./Cake.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import BirthdayCake from "../../components/BirthdayCake/BirthdayCake";
import ConfettiAnimation from "../../components/ConfettiAnimation/ConfettiAnimation";
import Fireworks from "../../components/Fireworks/Fireworks";
import FloatingHearts from "../../components/FloatingHearts/FloatingHearts";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import useApp from "../../hooks/useApp";

function Cake() {

    const navigate = useNavigate();

    const {

        addFriendshipPoints,
        setCakeCompleted,
        updateJourney

    } = useApp();

    const [candlesBlown,setCandlesBlown]=useState(false);

    const [cakeCut,setCakeCut]=useState(false);

    function blowCandles(){

        if(candlesBlown) return;

        setCandlesBlown(true);

    }

    function cutCake(){

        if(!candlesBlown) return;

        setCakeCut(true);

        addFriendshipPoints(100);

        setCakeCompleted(true);

        updateJourney(80);

    }

    function continueJourney(){

        navigate("/wishwall");

    }

    return(

<section className="cakePage">

<FloatingHearts/>

{

cakeCut &&

<>

<ConfettiAnimation trigger/>

<Fireworks trigger/>

</>

}

<motion.h1

initial={{opacity:0,y:-40}}

animate={{opacity:1,y:0}}

>

Happy Birthday Manju ❤️

</motion.h1>

<p>

Make a wish...

Blow the candles...

Cut the cake...

Celebrate the beautiful day!

</p>

<div className="cakeContainer">

<BirthdayCake

candlesBlown={candlesBlown}

cakeCut={cakeCut}

/>

</div>

<div className="cakeButtons">

{

!candlesBlown ?

<AnimatedButton

text="🕯 Blow Candles"

onClick={blowCandles}

/>

:

!cakeCut ?

<AnimatedButton

text="🍰 Cut Cake"

onClick={cutCake}

/>

:

<AnimatedButton

text="Continue ❤️"

onClick={continueJourney}

/>

}

</div>

<AnimatePresence>

{

cakeCut &&

<motion.div

className="celebration"

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

exit={{opacity:0}}

>

<h2>

🎉 Happy Birthday Tyson 🎉

</h2>

<p>

May every dream of yours come true,

and may your life always be filled with

love, happiness and success.

You truly deserve the best. ❤️

</p>

</motion.div>

}

</AnimatePresence>

</section>

    )

}

export default Cake;