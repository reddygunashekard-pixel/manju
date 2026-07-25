import "./Gallery.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import GalleryComponent from "../../components/Gallery/Gallery";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import useApp from "../../hooks/useApp";

function Gallery() {

    const navigate = useNavigate();

    const {

        setGalleryCompleted,
        addFriendshipPoints,
        updateJourney

    } = useApp();

    const images = [

        {
            id:1,
            image:"/images/gallery/1.jpg",
            title:"Beautiful Smile ❤️",
            message:"Every smile of yours brightens someone's day."
        },

        {
            id:2,
            image:"/images/gallery/2.jpg",
            title:"My Tyson",
            message:"The strongest person I know."
        },

        {
            id:3,
            image:"/images/gallery/3.jpg",
            title:"Golden Memories",
            message:"Some moments stay forever."
        },

        {
            id:4,
            image:"/images/gallery/4.jpg",
            title:"Queen",
            message:"You deserve every happiness."
        },

        {
            id:5,
            image:"/images/gallery/5.jpg",
            title:"Forever Friend",
            message:"Thank you for always being there."
        },

        {
            id:6,
            image:"/images/gallery/6.jpg",
            title:"Happy Birthday",
            message:"Today is all about you ❤️"
        }

    ];

    const [selected,setSelected]=useState(null);

    function continueJourney(){

        addFriendshipPoints(100);

        setGalleryCompleted(true);

        updateJourney(40);

        navigate("/letters");

    }

    return(

<section className="galleryPage">

<h1>

Memory Gallery ❤️

</h1>

<p>

Every picture tells a story.

</p>

<GalleryComponent

images={images}

onSelect={setSelected}

/>

<AnimatePresence>

{

selected &&

<motion.div

className="galleryModal"

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setSelected(null)}

>

<motion.div

className="galleryCard"

initial={{scale:.7}}

animate={{scale:1}}

exit={{scale:.8}}

onClick={(e)=>e.stopPropagation()}

>

<img

src={selected.image}

alt="gallery"

/>

<h2>

{selected.title}

</h2>

<p>

{selected.message}

</p>

</motion.div>

</motion.div>

}

</AnimatePresence>

<div className="galleryButtons">

<AnimatedButton

text="Continue ❤️"

onClick={continueJourney}

/>

</div>

</section>

    )

}

export default Gallery;