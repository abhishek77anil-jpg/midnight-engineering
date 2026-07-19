"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
}

export default function TimelineItem({
  year,
  title,
  subtitle,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative mb-28 flex flex-col items-center"
    >
      {/* Timeline Dot */}

      <div className="z-20 h-5 w-5 rounded-full border border-white/20 bg-white shadow-[0_0_20px_rgba(255,255,255,0.15)]" />

      {/* Year */}

      <span className="mt-5 text-sm uppercase tracking-[0.45em] text-white/40">
        {year}
      </span>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        glass
        mt-8
        w-full
        max-w-xl
        rounded-[32px]
        p-10
        text-center
        "
      >
        <h3 className="font-heading text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-lg text-secondary">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}