import { BrandLinkedin, BrandGithub } from "tabler-icons-react";

const socials = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/maycol-gallo-diaz-16409a199/",
    icon: <BrandLinkedin />,
  },
  {
    name: "Github",
    link: "https://github.com/MaycolGallo",
    icon: <BrandGithub />,
  },
];

export function Navbar() {
  return (
    <header className="border bg-white/70 backdrop-blur-md mx-auto max-w-4xl w-full shadow-md p-4 items-center rounded-xl sticky left-0 right-0 top-4 z-[500]">
      <nav className="flex justify-between items-center">
        <h1 className="font-semibold text-xl font-['Pacifico']">
          Maycol Gallo{" "}
        </h1>
        <ul className="flex items-center gap-3">
          {socials.map((s) => (
            <li key={s.name} className="hover:scale-110 p-1 hover:text-white rounded-full transition-all hover:bg-gray-600">
              <a
                href={`${s.link}`}
                target="_blank"
                
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
