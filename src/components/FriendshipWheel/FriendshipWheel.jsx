import "./FriendshipWheel.css";
import { motion } from "framer-motion";

const prizes = [
  { text: "❤️ Best Friend", color: "#ff4fa3" },
  { text: "👑 Birthday Queen", color: "#7c4dff" },
  { text: "🎁 Surprise Gift", color: "#4cc9f0" },
  { text: "🌍 Dream Trip", color: "#06d6a0" },
  { text: "🍫 Chocolate", color: "#ffd166" },
  { text: "🎬 Movie Night", color: "#ef476f" },
  { text: "💌 Hidden Letter", color: "#8338ec" },
  { text: "😊 Sweet Smile", color: "#ff8fab" }
];

function FriendshipWheel({

    spinning

}) {

    const angle = 360 / prizes.length;

    return (

        <section className="wheelSection">

            <div className="wheelWrapper">

                {/* Pointer */}

                <div className="pointer"></div>

                {/* Wheel */}

                <motion.div

                    className={`wheel ${spinning ? "spinning" : ""}`}

                    animate={

                        spinning

                            ? {

                                  rotate: 360 * 8 + Math.random() * 360

                              }

                            : {

                                  rotate: 0

                              }

                    }

                    transition={{

                        duration: 5,

                        ease: [0.15, 0.9, 0.25, 1]

                    }}

                >

                    {

                        prizes.map((item, index) => (

                            <div

                                key={index}

                                className="slice"

                                style={{

                                    transform: `rotate(${angle * index}deg)`,

                                    background: item.color,

                                    clipPath: "polygon(0 0,100% 0,100% 100%)"

                                }}

                            >

                                <span

                                    style={{

                                        transform: `rotate(${angle / 2}deg) translateY(-1px)`

                                    }}

                                >

                                    {item.text}

                                </span>

                            </div>

                        ))

                    }

                    {/* Center */}

                    <div className="wheelCenter">

                        ❤️

                    </div>

                </motion.div>

            </div>

        </section>

    );

}

export default FriendshipWheel;