import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <footer ref={ref} className="bg-slate-900 text-slate-100">
      <motion.div
        style={{ opacity: isInView ? 1 : 0 }}
        className="max-w-md mx-auto py-8 space-y-5 px-2 md:px-0"
      >
        <h1 className="text-4xl md:text-5xl mb-6 text-center font-bold">
          Trabajemos Juntos.
        </h1>
        <p className="capitalize text-center text-lg">
          no dude en ponerse en contacto conmigo a traves de estos medios
        </p>
        <div className="text-center space-y-5">
          <p className="flex justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
            <a href="mailto:maycolgallo25@gmail.com">maycolgallo25@gmail.com</a>
          </p>
          <p className="flex justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              ></path>
            </svg>
            <a href="tel:+51924133664">924133664</a>
          </p>
          <p className="text-lg">
            {new Date().getFullYear()} Maycol Gallo Diaz
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
