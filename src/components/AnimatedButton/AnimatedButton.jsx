import "./AnimatedButton.css";
import { motion } from "framer-motion";

function AnimatedButton({
    text = "Click Me",
    onClick,
    icon,
    width = "240px",
    height = "60px",
    background = "linear-gradient(135deg,#ff4f9f,#7c4dff)",
    color = "#fff",
    disabled = false,
    type = "button"
}) {

    return (

        <motion.button
            type={type}
            className="animatedButton"
            style={{
                width,
                height,
                background,
                color
            }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,79,159,.6)"
            }}
            whileTap={{
                scale: .95
            }}
            transition={{
                duration: .25
            }}
            disabled={disabled}
            onClick={onClick}
        >

            <span className="buttonGlow" />

            <span className="buttonContent">

                {icon && (
                    <span className="buttonIcon">
                        {icon}
                    </span>
                )}

                <span className="buttonText">
                    {text}
                </span>

            </span>

        </motion.button>

    );

}

export default AnimatedButton;