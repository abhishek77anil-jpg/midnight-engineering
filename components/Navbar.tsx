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
          transition={{ duration: 0.35 }}
          className="
            fixed
            top-4
            left-1/2
            -translate-x-1/2
            z-50
            w-[94%]
            md:w-auto
            flex
            justify-center
          "
        >
          <div
            className="
              glass
              flex
              w-full
              items-center
              justify-between
              rounded-full
              px-4
              py-3
              md:w-auto
              md:gap-8
              md:px-6
              md:py-4
            "
          >
            {/* Logo */}
            <Link
              href="#home"
              className="
                whitespace-nowrap
                text-sm
                font-semibold
                md:text-base
              "
            >
              Abhishek
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6">
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

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
                rounded-full
                p-2.5
                transition
                hover:bg-white/10
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