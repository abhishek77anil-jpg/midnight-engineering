"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-10"
    >
      <h1 className="font-heading font-bold leading-[0.92] tracking-tight text-5xl md:text-6xl lg:text-7xl">
        Trailblazing
      </h1>

      <h1 className="font-heading font-bold leading-[0.92] tracking-tight text-4xl md:text-5xl lg:text-6xl mt-1">
        the Future of
      </h1>

      <h1 className="font-heading font-black leading-[0.92] tracking-tight text-5xl md:text-6xl lg:text-7xl mt-1">
        Healthcare
      </h1>

      <h1 className="font-heading font-bold leading-[0.92] tracking-tight text-4xl md:text-5xl lg:text-6xl mt-1">
        through AI.
      </h1>

      <div className="mx-auto mt-12 h-px w-32 rounded-full bg-white/10" />

      <div className="mt-10 space-y-2">
        <p className="text-lg font-semibold text-white">
          Biomedical Engineering Student
        </p>

        <p className="text-neutral-400">
          M.S. Ramaiah Institute of Technology
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-neutral-400">
        Building intelligent healthcare solutions through Artificial
        Intelligence, Medical Imaging, Embedded Systems and Biomedical Signal
        Processing.
      </p>
    </motion.div>
  );
}