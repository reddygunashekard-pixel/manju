import "./Quiz.css";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import ConfettiAnimation from "../../components/ConfettiAnimation/ConfettiAnimation";
import useApp from "../../hooks/useApp";

function Quiz() {

    const navigate = useNavigate();
        const [answers, setAnswers] = useState([]);


    const {

        addFriendshipPoints,
        setQuizCompleted,
        updateJourney

    } = useApp();

    const questions = useMemo(() => [

        {
            question:"What nickname I gave you?",
            options:["Manju","Tyson","Queen","Boss"],
            answer:"Tyson"
        },

        {
            question:"What's my favourite color?",
            options:["Black","Pink","Blue","White"],
            answer:"Black"
        },

        {
            question:"What's my favourite season?",
            options:["Winter","Summer","Rainy","Spring"],
            answer:"Winter"
        },

        {
            question:"What's my dream travel place?",
            options:["Maldives","Switzerland","Japan","Paris"],
            answer:"Paris"
        },

        {
            question:"What's my favourite food?",
            options:["Pizza","Biryani","Pasta","Burger"],
            answer:"Biryani"
        },

        {
            question:"What's my favourite movie genre?",
            options:["Comedy","Romance","Action","Horror"],
            answer:"Action"
        },

        {
            question:"Dogs or Cats?",
            options:["Dogs","Cats"],
            answer:"Dogs"
        },

        {
            question:"Morning or Night?",
            options:["Morning","Night"],
            answer:"Night"
        },

        {
            question:"Beach or Mountains?",
            options:["Beach","Mountains"],
            answer:"Mountains"
        },

        {
            question:"What's my favourite sweet?",
            options:["Ice Cream","Chocolate","Cake","Donut"],
            answer:"Chocolate"
        }

    ],[]);

    const [current,setCurrent]=useState(0);

    const [selected,setSelected]=useState("");

    const [score,setScore]=useState(0);

    const [finished,setFinished]=useState(false);

    function nextQuestion() {

    const currentQuestion = questions[current];

    const isCorrect = selected === currentQuestion.answer;

    setAnswers(prev => [

        ...prev,

        {

            question: currentQuestion.question,

            selected,

            correct: currentQuestion.answer,

            isCorrect

        }

    ]);

    let newScore = score;

    if (isCorrect) {

        newScore += 10;
        setScore(newScore);

    }

    if (current === questions.length - 1) {

        addFriendshipPoints(newScore);

        setQuizCompleted(true);

        updateJourney(20);

        setFinished(true);

        return;

    }

    setCurrent(prev => prev + 1);

    setSelected("");

}

    function continueJourney(){

        navigate("/Gallery");

    }

    return(

<section className="quizPage">

{

finished &&

<ConfettiAnimation trigger/>

}

<motion.div

className="quizCard"

layout

>

{

!finished ?

<>

<h1>

Friendship Quiz ❤️

</h1>

<div className="progress">

Question {current+1} / {questions.length}

</div>

<h2>

{questions[current].question}

</h2>

<div className="options">

{

questions[current].options.map(option=>(

<button

key={option}

className={

selected===option

?

"selected"

:

""

}

onClick={()=>setSelected(option)}

>

{option}

</button>

))

}

</div>

<AnimatedButton

text={

current===questions.length-1

?

"Finish Quiz ❤️"

:

"Next →"

}

onClick={nextQuestion}

/>

</>

:

<AnimatePresence>

<motion.div

initial={{scale:.8,opacity:0}}

animate={{scale:1,opacity:1}}

>

<h1>

Amazing Tyson ❤️

</h1>

<h2>

You scored {score}/100 🎉

</h2>

<p>

Here's how you answered ❤️

</p>

<div className="answerSummary">

{

answers.map((item,index)=>(

<div

key={index}

className={`answerCard ${item.isCorrect ? "correct" : "wrong"}`}

>

<h4>

{index+1}. {item.question}

</h4>

<p>

<b>Your Answer:</b> {item.selected}

</p>

<p>

<b>Correct Answer:</b> {item.correct}

</p>

</div>

))

}

</div>

<AnimatedButton

text="Continue ❤️"

onClick={continueJourney}

/>

</motion.div>

</AnimatePresence>

}

</motion.div>

</section>

    )

}

export default Quiz;