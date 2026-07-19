"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
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
          <DesktopNavbar
            theme={theme}
            setTheme={setTheme}
          />

          <MobileMenu
            open={menuOpen}
            setOpen={setMenuOpen}
            theme={theme}
            setTheme={setTheme}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}