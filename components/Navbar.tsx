"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { name: "Journey", href: "#journey" },
  { name: "Timeline", href: "#timeline" },
  { name: "Innovations", href: "#innovations" },
  { name: "Leadership", href: "#leadership" },
  { name: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: .35 }}
          className="
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          z-50
          "
        >
          <div
            className="
            glass
            flex
            items-center
            gap-8
            rounded-full
            px-6
            py-4
            "
          >
            <Link
              href="#home"
              className="font-semibold"
            >
              Abhishek
            </Link>

            <div className="flex gap-6">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                  text-sm
                  text-secondary
                  transition
                  hover:text-white
                  "
                >
                  {link.name}
                </Link>
              ))}

            </div>

            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
              rounded-full
              p-2
              hover:bg-white/10
              transition
              "
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}