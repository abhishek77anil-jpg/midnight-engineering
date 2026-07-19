"use client";

import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

import { innovations } from "@/data/innovations";
import InnovationCard from "./InnovationCard";

export default function Innovations() {
  return (
    <Section id="innovations">

      <Reveal>

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-secondary">
            Innovations
          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold">
            Engineering
            <br />
            through innovation.
          </h2>

        </div>

      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

        {innovations.map((project) => (

          <InnovationCard
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />

        ))}

      </div>

    </Section>
  );
}