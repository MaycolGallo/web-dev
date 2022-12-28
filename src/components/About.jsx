import { Navbar } from "./Nav";
import { Divider } from "./divider";
import { CharacterAnimate } from "./CharacterAnimate";

export function About() {
  return (
    <>
      <section className="bg-[#0d2129] p-3 lg:p-0">
        <Navbar />

        <div className="max-w-4xl mx-auto p-12 grid sm:grid-cols-2 ">
          <div className="my-6 flex justify-center row-start-2 sm:row-start-1">
            <img
              className="w-52 h-52 rounded-full ring ring-teal-900 object-cover"
              src="imgs/lll.jpg"
              alt="profile pic"
              loading="lazy"
            />
          </div>
          <div className="space-y-5 my-6 text-center text-white sm:text-left">
          <CharacterAnimate text="Maycol Gallo Diaz" className="text-4xl"/>

            <h3 className="font-light italic">Desarrollador web</h3>
            <p className="max-w-sm mx-auto px-2 sm:px-0">
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
