"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  theme?: string;
  setTheme: (theme: string) => void;
};

const links = [
  { name: "Journey", href: "#journey" },
  { name: "Timeline", href: "#timeline" },
  { name: "Innovations", href: "#innovations" },
  { name: "Leadership", href: "#leadership" },
  { name: "Connect", href: "#connect" },
];

export default function MobileMenu({
  open,
  setOpen,
  theme,
  setTheme,
}: Props) {
  return (
    <>
      {/* Mobile Navbar */}
      {!open && (
        <div className="glass flex items-center justify-between rounded-full px-4 py-3 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <Menu size={22} />
          </button>

          <Link
            href="#home"
            className="font-semibold"
          >
            Abhishek
          </Link>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 rounded-full p-3 text-white transition hover:bg-white/10"
            >
              <X size={30} />
            </button>

            <div className="flex min-h-screen flex-col items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-10 text-center"
              >
                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Midnight
                </h1>

                <h1 className="font-heading text-4xl font-bold tracking-tight">
                  Engineering
                </h1>

                <p className="mt-3 text-sm text-neutral-400">
                  Biomedical Engineering × Artificial Intelligence
                </p>

                <div className="mx-auto mt-6 h-px w-24 rounded-full bg-white/10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="
                  w-full
                  max-w-sm
                  rounded-3xl
                  border
                  border-white/10
                  bg-neutral-900/95
                  shadow-2xl
                  overflow-hidden
                "
              >
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="
                        block
                        py-6
                        text-center
                        text-3xl
                        font-heading
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white/5
                      "
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="
                  mt-8
                  glass
                  flex
                  items-center
                  gap-3
                  rounded-full
                  px-6
                  py-3
                  transition
                  hover:bg-white/10
                "
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={18} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}