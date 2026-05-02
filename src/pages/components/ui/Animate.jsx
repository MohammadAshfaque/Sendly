import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function Animate({ variant = "fadeUp", delay = 0, className = "", style = {}, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const v = variant === "scaleIn" ? scaleIn : fadeUp;
  return (
    <motion.div
      ref={ref}
      variants={v}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}