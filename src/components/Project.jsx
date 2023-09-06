import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Project({ p }) {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
  });
  const transY = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const opac = useTransform(scrollYProgress, [1, 0], [0, 1],{});

  const yeye = useTransform(scrollYProgress,[1,0],[100,0])
  return (
    <motion.div
      ref={ref}
      style={{ scale: transY,opacity:opac }}
    //   style={{ y:yeye,opacity:opac }}
        transition={{ duration: 0.5,type:'spring',bounce:0.5 }}
      key={p.name}
      className="max-w-[350px] bg-white rounded-xl shadow-md"
    >
      <img
        src={p.img}
        alt={p.name}
        className="max-w-full  border rounded-t-md h-auto"
        loading="lazy"
      />
      {p.url ? (
        <div className="p-3 border rounded-b-md">
          <a
            className="bg-slate-900 w-full inline-block rounded-md py-2 text-center px-4 font-semibold text-white"
            href={p.url}
            target="_blank"
          >
            ver en linea
          </a>
        </div>
      ) : null}
    </motion.div>
  );
}
