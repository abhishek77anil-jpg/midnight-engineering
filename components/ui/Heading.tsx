import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h2
      className={`
        font-heading
        text-4xl
        md:text-5xl
        font-bold
        tracking-tight
        text-foreground
        ${className}
      `}
    >
      {children}
    </h2>
  );
}