import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CharacterAnimate({ text, className = "" }) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({ 
    threshold: 0.55, 
    triggerOnce: true 
 });

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25rem`,
    },
    visible: {
      opacity: 1,
      y: `0rem`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) ctrls.start("hidden");
  }, [ctrls, inView]);

  return (
    <h1 className={`${className} font-bold`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          ref={ref}
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          className="inline-block whitespace-nowrap mr-2"
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
        >
          {word.split("").map((char, index) => (
            <motion.span
              ref={ref}
              key={index}
              initial="hidden"
              animate={ctrls}
              className="inline-block mr-[-0.05em]"
              variants={characterAnimation}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h1>
  );
}
