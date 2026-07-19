"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y:[0,6,0]
      }}
      transition={{
        repeat:Infinity,
        duration:2
      }}
      className="mt-20 flex flex-col items-center text-secondary"
    >
      <span className="text-xs uppercase tracking-[0.45em]">
        Scroll
      </span>

      <ChevronDown
        size={20}
        className="mt-3"
      />

    </motion.div>
  );
}