"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 350);
      mouseY.set(e.clientY - 350);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Large Glow */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[700px] w-[700px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      {/* Medium Glow */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-[120px] top-[120px] z-0 h-[420px] w-[420px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Core Glow */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-[260px] top-[260px] z-0 h-[120px] w-[120px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full bg-white/10"
          style={{
            filter: "blur(18px)",
          }}
        />
      </motion.div>
    </>
  );
}