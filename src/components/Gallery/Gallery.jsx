import "./Gallery.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  { id: 1, title: "Beautiful Smile ❤️", image: "/images/gallery/M1.jpeg" },
  { id: 2, title: "Cute Tyson 🌸", image: "/images/gallery/M2.jpeg" },
  { id: 3, title: "Lovely Memories ✨", image: "/images/gallery/M3.jpeg" },
  { id: 4, title: "Our Friendship 💖", image: "/images/gallery/M4.jpeg" },
  { id: 5, title: "Forever Friends ❤️", image: "/images/gallery/M5.jpeg" },
  { id: 6, title: "Happy Moments 🌈", image: "/images/gallery/M6.jpeg" },
  { id: 7, title: "Smile Queen 👑", image: "/images/gallery/M7.jpeg" },
  { id: 8, title: "Special Tyson 💜", image: "/images/gallery/M8.jpeg" },
  { id: 9, title: "Sweet Memories 💕", image: "/images/gallery/M9.jpeg" },
  { id: 10, title: "Best Moments ✨", image: "/images/gallery/M10.jpeg" },
  { id: 11, title: "Forever Together 🌹", image: "/images/gallery/M11.jpeg" },
  { id: 12, title: "Golden Smile 🌟", image: "/images/gallery/M12.jpeg" },
  { id: 13, title: "Unforgettable Day 🎉", image: "/images/gallery/M13.jpeg" },
  { id: 14, title: "Happy Birthday Tyson ❤️", image: "/images/gallery/M14.jpeg" },
  { id: 15, title: "Cherished Moments 💝", image: "/images/gallery/M15.jpeg" },
  { id: 16, title: "Endless Happiness 🌼", image: "/images/gallery/M16.jpeg" },
  { id: 17, title: "Precious Memories 💫", image: "/images/gallery/M17.jpeg" },
  { id: 18, title: "Forever My Best Friend ❤️", image: "/images/gallery/M18.jpeg" }
];

function Gallery(){

return(

<section className="gallerySection">

<motion.h2

className="galleryTitle"

initial={{opacity:0,y:-40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

>

Beautiful Memories

</motion.h2>

<p className="gallerySubtitle">

Every picture tells a story ❤️

</p>

<PhotoProvider>

<div className="galleryGrid">

{

images.map((item,index)=>(

<motion.div

key={item.id}

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
delay:index*.08
}}

viewport={{
once:true
}}

>

<Tilt

tiltMaxAngleX={8}

tiltMaxAngleY={8}

perspective={1200}

transitionSpeed={1200}

scale={1.04}

glareEnable={true}

glareMaxOpacity={.15}

className="galleryTilt"

>

<PhotoView src={item.image}>

<div className="galleryCard">

<img

src={item.image}

alt={item.title}

loading="lazy"

/>

<div className="galleryOverlay">

<h3>

{item.title}

</h3>

<p>

Tap to View

</p>

</div>

</div>

</PhotoView>

</Tilt>

</motion.div>

))

}

</div>

</PhotoProvider>

</section>

);

}

export default Gallery;