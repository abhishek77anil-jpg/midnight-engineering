"use client";

import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function Connect() {
  return (
    <Section id="connect">

      <Reveal>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-secondary">
            Connect
          </p>

          <h2 className="mt-6 font-heading text-6xl font-bold">
            Let's build
            <br />
            something meaningful.
          </h2>

          <p className="mt-8 text-lg leading-8 text-secondary">
            Whether it's healthcare technology, AI research,
            product development or collaboration—
            I'd love to connect.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a href="mailto:your@email.com" className="glass rounded-full px-7 py-3">
              Email
            </a>

            <a href="#" className="glass rounded-full px-7 py-3">
              GitHub
            </a>

            <a href="#" className="glass rounded-full px-7 py-3">
              LinkedIn
            </a>

            <a
  href="/resume.pdf"
  download="AbhishekAnilResume.pdf"
  className="glass rounded-full px-7 py-3"
>
  Resume
</a>

          </div>

        </div>

      </Reveal>

    </Section>
  );
}