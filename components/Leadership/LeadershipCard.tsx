"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function LeadershipCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-[28px] p-8"
    >
      <h3 className="text-2xl font-heading font-semibold">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-secondary">
        {description}
      </p>
    </motion.div>
  );
}