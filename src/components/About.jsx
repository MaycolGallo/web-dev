import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 35 }}
        transition={{ duration: 0.9 }}
        style={{
          backgroundImage:
            " linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
        }}
        className="max-w-4xl flex flex-col-reverse rounded-lg bg-blue-600 sm:flex-row px-4 items-center mx-5 justify-around md:mx-auto "
      >
        <div className="my-6 flex justify-center">
          <img
            className="w-52 h-52 rounded-full ring object-cover"
            src="imgs/lll.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5 my-6 text-center text-white sm:text-left">
          <h1 className="text-4xl font-bold">Maycol Gallo Diaz</h1>
          <h3 className="font-light italic">Desarrollador web</h3>
          <p className="max-w-sm mx-auto px-2 sm:px-0">
            Creando aplicaciones web. Buscando las mejores herramientas y
            mejorando el aprendizaje con las nuevas tecnologías existentes
          </p>
          <div className="flex items-center justify-center gap-x-3"></div>
        </div>
      </motion.div>
    </>
  );
}
