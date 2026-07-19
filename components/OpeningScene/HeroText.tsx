"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-10 px-6"
    >
      <h1 className="font-heading font-bold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Trailblazing
      </h1>

      <h1 className="mt-1 font-heading font-bold leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        the Future of
      </h1>

      <h1 className="mt-1 font-heading font-black leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Healthcare
      </h1>

      <h1 className="mt-1 font-heading font-bold leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        through AI.
      </h1>

      <div className="mx-auto mt-8 md:mt-12 h-px w-24 md:w-32 rounded-full bg-white/10" />

      <div className="mt-8 md:mt-10 space-y-1 md:space-y-2">
        <p className="text-base md:text-lg font-semibold text-white">
          Biomedical Engineering Student
        </p>

        <p className="text-sm md:text-base text-neutral-400">
          M.S. Ramaiah Institute of Technology
        </p>
      </div>

      <p className="mx-auto mt-6 md:mt-8 max-w-lg text-base md:text-lg leading-7 md:leading-8 text-neutral-400">
        Building intelligent healthcare solutions through Artificial
        Intelligence, Medical Imaging, Embedded Systems, and Biomedical Signal
        Processing.
      </p>
    </motion.div>
  );
}