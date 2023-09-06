import { motion } from "framer-motion";

export function Worder({ word,classes }) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 5.5,
        type:'spring',
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
      }
    },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={`${classes} text-5xl font-bold`}
    >
      {word.split(" ").map((w, index) => (
        <motion.span
          style={{ display: "inline-block", paddingRight: "15px" }}
          variants={item}
          key={index}
        >
          {w === "" ? <span>&nbsp;</span> : w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
