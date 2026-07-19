"use client";

import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import LeadershipCard from "./LeadershipCard";

import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <Section id="leadership">

      <Reveal>

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-secondary">
            Leadership
          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Building teams,
            <br />
            not just technology.
          </h2>

        </div>

      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

        {leadership.map((item) => (
          <LeadershipCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}

      </div>

    </Section>
  );
}