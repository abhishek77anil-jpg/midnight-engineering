"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";

export default function Journey() {
  return (
    <Section id="journey">

      <motion.div
        initial={{ opacity:0,y:40 }}
        whileInView={{ opacity:1,y:0 }}
        viewport={{ once:true }}
        transition={{ duration:.8 }}
        className="mx-auto max-w-4xl"
      >

        <p className="text-sm uppercase tracking-[0.35em] text-secondary">
          Journey
        </p>

        <h2 className="mt-5 text-5xl font-heading font-bold">
          Building technology
          <br />
          for healthcare.
        </h2>

        <div className="mt-12 space-y-8 text-lg text-secondary leading-9">

          <p>

            My journey began with Biomedical Engineering,
            where I discovered the intersection of medicine,
            engineering and artificial intelligence.

          </p>

          <p>

            Over the past few years, I have worked on AI-powered
            healthcare projects involving medical imaging,
            respiratory sound classification and computer vision,
            while continuously exploring embedded systems
            and software development.

          </p>

          <p>

            Today, I enjoy building products that combine
            thoughtful design with intelligent healthcare
            solutions.

          </p>

        </div>

      </motion.div>

    </Section>
  );
}