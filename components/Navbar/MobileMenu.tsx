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
      {/* Mobile Top Bar */}
      <div className="glass flex items-center justify-between rounded-full px-4 py-3 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-2 transition hover:bg-white/10"
        >
          <Menu size={22} />
        </button>

        <Link
          href="#home"
          onClick={() => setOpen(false)}
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

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/70
              backdrop-blur-xl
              md:hidden
            "
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                flex
                h-full
                flex-col
                px-8
                py-10
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  Midnight Engineering
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    rounded-full
                    p-2
                    hover:bg-white/10
                  "
                >
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <div className="mt-20 flex flex-col gap-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 * index,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="
                        text-3xl
                        font-semibold
                        transition
                        hover:text-white
                      "
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto">
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="
                    glass
                    flex
                    items-center
                    gap-3
                    rounded-full
                    px-5
                    py-3
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}