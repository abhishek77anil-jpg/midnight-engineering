"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function MoonlightCursor() {
  const { theme } = useTheme();

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  if (theme !== "dark") return null;

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-0
      h-[500px]
      w-[500px]
      rounded-full
      blur-3xl
      "
    >
      <div
        className="
        h-full
        w-full
        rounded-full
        bg-white/5
        "
      />
    </motion.div>
  );
}