import { projects } from "../lib/projects";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CharacterAnimate } from "./CharacterAnimate";

export function Projects() {
  const ref = useRef(null);
  const container = useRef(null);
  const isInView = useInView(container, {
    // once: true,
    // margin: "80%",
    amount: 1,
  });

  const variantes = {
    visible: {
      opacity: 1,
      y:0,
      transition:{
        duration:1,
        type:'spring',
        staggerChildren: 0.15
      }
    },
    invisible:{
      opacity: 0,
      y:'100%'
    }
  }

  useEffect(() => {
    console.log("projects inview", isInView);
  }, [isInView]);

  return (
    <section ref={container} className="max-w-screen-[1045px] mx-auto my-20">
      <CharacterAnimate text="Mis Proyectos" className="text-5xl p-3 text-center" />

      <motion.div
      layout
        initial="invisible"
        animate="visible"
        variants={variantes}
        className="flex flex-wrap gap-3 my-5 justify-center"
      >
        {projects.map((p) => (
          <motion.div
            variants={variantes}
            key={p.name}
            className="max-w-[350px] bg-white rounded-xl hover:scale-110 shadow-md transition-transform"
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
        ))}
      </motion.div>
    </section>
  );
}
