import { projects } from "../lib/projects";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto my-20">
      <motion.h1
        initial={{ x: "-100%" }}
        animate={{ x: 5 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Mis Proyectos
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap gap-3 my-5 justify-center"
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="max-w-[346px] hover:scale-110 shadow-md transition-transform"
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
