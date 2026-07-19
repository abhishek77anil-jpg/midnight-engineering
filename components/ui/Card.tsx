import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        surface
        rounded-3xl
        border
        border-border
        shadow-soft
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-medium
        ${className}
      `}
    >
      {children}
    </div>
  );
}