import { motion, AnimatePresence } from "framer-motion";
import "./PageTransition.css";

function PageTransition({ children, pageKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        className="pageTransition"
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.98
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: -60,
          scale: 0.98
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;