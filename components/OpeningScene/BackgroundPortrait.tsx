"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundPortrait() {
  const { scrollY } = useScroll();

  // Portrait slowly moves upward
  const y = useTransform(scrollY, [0, 700], [0, -140]);

  // Fades while scrolling
  const opacity = useTransform(
  scrollY,
  [0, 500],
  [0.16, 0]
);
  // Slight zoom out
  const scale = useTransform(scrollY, [0, 700], [1.08, 1]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
      className="
      pointer-events-none
      absolute
      inset-0
      z-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      <div
        className="
        relative
        h-[80vh]
        w-[620px]
        max-w-[95vw]
        "
      >
        <Image
          src="/profile.png"
          alt="Portrait"
          fill
          priority
          className="
          object-cover
          object-top
          select-none

          saturate-50
          contrast-125
          brightness-90

          [mask-image:radial-gradient(circle,white_42%,transparent_90%)]
          "
        />
      </div>
    </motion.div>
  );
}