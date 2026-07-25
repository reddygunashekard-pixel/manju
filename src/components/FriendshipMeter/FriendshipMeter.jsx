import "./FriendshipMeter.css";
import { motion } from "framer-motion";

const meters = [
  {
    title: "Trust",
    value: 100,
    color: "#ff4fa3"
  },
  {
    title: "Care",
    value: 100,
    color: "#ff8fab"
  },
  {
    title: "Support",
    value: 100,
    color: "#7c4dff"
  },
  {
    title: "Laughter",
    value: 100,
    color: "#ffd166"
  },
  {
    title: "Memories",
    value: 100,
    color: "#06d6a0"
  },
  {
    title: "Understanding",
    value: 100,
    color: "#4cc9f0"
  },
  {
    title: "Madness",
    value: 999,
    color: "#f72585"
  },
  {
    title: "Friendship",
    value: 1000,
    color: "#ffffff"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35
    }
  }
};

function FriendshipMeter() {

  return (

    <section className="friendshipMeter">

      <motion.h2
        className="meterTitle"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        Tyson ❤️ Friendship Meter
      </motion.h2>

      <motion.p
        className="meterSubtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Every memory, every smile and every moment together
        makes our friendship stronger.
      </motion.p>

      <motion.div
        className="meterContainer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {meters.map((item, index) => (

          <motion.div
            key={index}
            className="meterCard"
            variants={cardVariants}
          >

            <div className="meterHeader">

              <span>{item.title}</span>

              <span>{item.value}%</span>

            </div>

            <div className="meterTrack">

              <motion.div
                className="meterFill"
                style={{
                  background: item.color
                }}
                initial={{
                  width: 0
                }}
                whileInView={{
                  width:
                    item.value >= 100
                      ? "100%"
                      : `${item.value}%`
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.05
                }}
              />

            </div>

          </motion.div>

        ))}

      </motion.div>

      <motion.div
        className="friendshipQuote"
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: 0.3
        }}
      >
        ❤️ "Best friends aren't found...
        they're a blessing." ❤️
      </motion.div>

    </section>

  );

}

export default FriendshipMeter;