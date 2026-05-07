import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { transformationPillars } from "@/config/landing";

export function ValuePropositionSection() {
  return (
    <section id="transformation" className="section-shell">
      <Reveal>
        <div className="max-w-3xl">
          <p className="eyebrow">Expérience de transformation</p>
          <h2 className="section-title">
            Une formation pour aligner ton mental, ton rythme et tes actions.
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {transformationPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.05}>
            <article className="premium-card group h-full p-5">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-[0.22em] text-[#B800FF]">
                  0{index + 1}
                </span>
                <ArrowUpRight className="size-4 text-white/28 transition group-hover:text-[#B800FF]" />
              </div>
              <h3 className="text-xl font-black uppercase text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{pillar.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
