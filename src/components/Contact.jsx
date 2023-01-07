import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "30px" });

  return (
    <footer ref={ref} className="bg-[#0d2129] text-slate-100">
      <motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.25 }}
        className="max-w-lg mx-auto py-8 space-y-5 px-2 md:px-0"
      >
        <h1 className="text-4xl md:text-5xl mb-6 text-center font-bold">
          Trabajemos Juntos
        </h1>
        <p className="capitalize max-w-md mx-auto text-center text-lg text-slate-200">
          no dude en ponerse en contacto conmigo a traves de estos medios
        </p>
        <div className="flex flex-wrap sm:flex-nowrap max-w-lg mx-auto gap-3 my-8 justify-center">
          <div className="rounded-xl w-64 bg-[#75dceb] p-5 text-center text-black">
            <div className="inline-flex rounded-full bg-[#d3f5fa] p-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="mt-4">
              <p className="font-semibold capitalize">Correo</p>
              <p className="text-center font-medium">maycolgallo25@gmail.com</p>
            </div>
          </div>
          <div className="rounded-xl w-64 bg-[#75dceb] p-5 text-center text-black">
            <div className="inline-flex rounded-full bg-[#d3f5fa] p-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </div>
            <div className="mt-4">
              <p className="font-semibold capitalize">Celular</p>
              <p className="text-center font-medium">924133664</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-medium">{new Date().getFullYear()} &bull; Maycol Gallo Diaz</p>
        </div>
      </motion.div>
    </footer>
  );
}
