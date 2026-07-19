"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  stack: string[];
}

export default function InnovationCard({
  title,
  description,
  stack,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: .3 }}
      className="
      glass
      rounded-[32px]
      p-10
      "
    >
      <p className="text-sm tracking-[0.3em] uppercase text-secondary">
        Innovation
      </p>

      <h3 className="mt-5 font-heading text-3xl font-bold">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-secondary">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {stack.map((tech) => (
          <span
            key={tech}
            className="
            rounded-full
            border
            border-white/10
            px-4
            py-2
            text-sm
            "
          >
            {tech}
          </span>
        ))}

      </div>
    </motion.div>
  );
}