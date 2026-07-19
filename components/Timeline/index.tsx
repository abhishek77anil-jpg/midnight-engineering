"use client";

import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

import TimelineLine from "./TimelineLine";
import TimelineItem from "./TimelineItem";

import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <Section
      id="timeline"
      className="relative"
    >
      <Reveal>
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">
            Timeline
          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Every milestone
            <br />
            shaped the next.
          </h2>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-3xl">

        <TimelineLine />

        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

      </div>
    </Section>
  );
}