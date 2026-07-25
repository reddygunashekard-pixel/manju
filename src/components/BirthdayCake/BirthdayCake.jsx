import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./BirthdayCake.css";

function BirthdayCake({ onComplete }) {
  const [candles, setCandles] = useState([
    true,
    true,
    true,
    true,
    true
  ]);

  const [cakeCut, setCakeCut] = useState(false);

  const blowCandle = (index) => {
    const updated = [...candles];
    updated[index] = false;
    setCandles(updated);
  };

  useEffect(() => {
    const allBlown = candles.every((c) => !c);

    if (allBlown) {
      setTimeout(() => {
        setCakeCut(true);

        if (onComplete) {
          onComplete();
        }
      }, 1200);
    }
  }, [candles, onComplete]);

  return (
    <div className="cakeWrapper">

      <motion.h2
        className="cakeTitle"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Happy Birthday Manju 🎂
      </motion.h2>

      <p className="cakeSub">
        Tyson, click every candle to make a birthday wish ❤️
      </p>

      <div className="cakeArea">

        <div className="candles">

          {candles.map((lit, index) => (
            <div
              key={index}
              className="candleBox"
              onClick={() => blowCandle(index)}
            >
              {lit && <div className="flame"></div>}

              <div
                className={`candle ${!lit ? "off" : ""}`}
              />
            </div>
          ))}

        </div>

        <motion.div
          className={`cake ${cakeCut ? "cut" : ""}`}
          animate={{
            scale: cakeCut ? 1.05 : 1
          }}
        >

          <div className="icing"></div>

          <div className="layer layer1"></div>

          <div className="cream"></div>

          <div className="layer layer2"></div>

          <div className="cream"></div>

          <div className="layer layer3"></div>

          <div className="plate"></div>

        </motion.div>

      </div>

      {cakeCut && (
        <motion.div
          className="cakeMessage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🎉 Yay Tyson! 🎉

          <br />

          Your wish has been sent to the stars ✨
        </motion.div>
      )}
    </div>
  );
}

export default BirthdayCake;