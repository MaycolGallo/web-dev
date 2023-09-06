import { useRef } from "react";
import { projects } from "../lib/projects";
import { Worder } from "./prop";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Project } from "./Project";

export function Leptos() {
  const referee = useRef(null)
  const inView = useInView(referee,{
    amount:0.5
  })

  const {scrollYProgress} = useScroll({
    target: referee,

  })

  const transY = useTransform(scrollYProgress, [-100, 0], [0, 1])
  const naigers = useTransform(scrollYProgress, [0, 100], [0, 360])

  const frog = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring",duration:4 } },
  };
  console.log(scrollYProgress)
  return (
    <motion.section
      className="max-w-[1045px] mx-auto my-20"
    >
      <Worder word="Mis Proyectos" classes={'text-center'}/>

      <motion.div
            // ref={referee}
        viewport={{ once: true }}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-wrap gap-3 my-5 justify-center"
      >
        {projects.map((p) => (
          <Project p={p} key={p.name}/>
          // <motion.div
          //   style={{ y: transY }}
          //   key={p.name}
          //   className="max-w-[350px] bg-white rounded-xl shadow-md"
          // >
          //   <img
          //     src={p.img}
          //     alt={p.name}
          //     className="max-w-full  border rounded-t-md h-auto"
          //     loading="lazy"
          //   />
          //   {p.url ? (
          //     <div className="p-3 border rounded-b-md">
          //       <a
          //         className="bg-slate-900 w-full inline-block rounded-md py-2 text-center px-4 font-semibold text-white"
          //         href={p.url}
          //         target="_blank"
          //       >
          //         ver en linea
          //       </a>
          //     </div>
          //   ) : null}
          // </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );

}
