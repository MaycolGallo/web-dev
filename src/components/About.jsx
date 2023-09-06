import { Navbar } from "./Nav";
import { Divider } from "./divider";
import { Worder } from "./prop";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <section className="bg-[#0d2129] p-3 lg:p-0">
        <Navbar />

        <div className="max-w-4xl mx-auto p-12 grid sm:grid-cols-2 ">
          <div className="my-6 flex justify-center row-start-2 sm:row-start-1">
            <motion.img
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className=" rounded-full ring ring-teal-900"
              src="https://res.cloudinary.com/dvtqaep2x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1694031090/20230906_150830_hwsje2.jpg"
              alt="profile pic"
              loading="lazy"
              style={{
                width: "13rem",
                height: "13rem",
                objectFit: "cover",
                marginBlock: "auto",
              }}
            />
          </div>
          <div className="space-y-5 my-6 text-center text-white sm:text-left">
            <Worder word="Maycol Gallo Diaz" />

            <h3 className="font-light italic">Desarrollador web</h3>
            <p
              className="max-w-sm px-2 sm:px-0"
              style={{ textWrap: "balance" }}
            >
              Creando aplicaciones web. Buscando las mejores herramientas y
              mejorando mi aprendizaje con las nuevas tecnologías existentes.
            </p>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
