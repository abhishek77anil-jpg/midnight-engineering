"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";

type Props = {
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

export default function DesktopNavbar({
  theme,
  setTheme,
}: Props) {
  return (
    <div
      className="
      hidden
      md:flex
      glass
      items-center
      gap-8
      rounded-full
      px-6
      py-4
      "
    >
      <Link
        href="#home"
        className="font-semibold whitespace-nowrap"
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
  );
}