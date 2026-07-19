"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingProps {
  children: React.ReactNode;
}

export default function LoadingScreen({
  children,
}: LoadingProps) {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setMounted(true);

    const t1 = setTimeout(() => setStage(1), 1700);
    const t2 = setTimeout(() => setStage(2), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {stage !== 2 && (
          <motion.div
            key={stage}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {stage === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-center text-3xl font-light leading-relaxed font-body">
                  Every innovation begins
                  <br />
                  with a single idea.
                </p>
              </motion.div>
            ) : (
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-5xl font-bold"
              >
                Mine begins here.
              </motion.h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {stage === 2 && children}
    </>
  );
}