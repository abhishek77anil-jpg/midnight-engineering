import { ReactNode } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}