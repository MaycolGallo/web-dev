import { projects } from "../lib/projects";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CharacterAnimate } from "./CharacterAnimate";

export function Projects() {
  const ref = useRef(null);
  const container = useRef(null);
  const isInView = useInView(ref, {
    root: container,
    once: true,
    // margin: "80%",
    // amount: 0.5,
  });

  useEffect(() => {
    console.log("projects inview", isInView);
  }, [isInView]);

  return (
    <section ref={container} className="max-w-4xl  mx-auto my-20">
      <CharacterAnimate text="Mis Proyectos" className="text-5xl p-3" />

      <motion.div
        ref={ref}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 13.5,delay:23 }}
        className="flex flex-wrap gap-3 my-5 justify-center"
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="max-w-[346px] bg-white rounded-xl hover:scale-110 shadow-md transition-transform"
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
          </div>
        ))}
      </motion.div>
    </section>
  );
}
