import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-foreground text-background hover:opacity-90 shadow-soft",

    secondary:
      "border border-border bg-transparent text-foreground hover:bg-white/5",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}