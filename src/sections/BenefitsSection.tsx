import {
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { benefits } from "@/config/landing";

const icons: Record<(typeof benefits)[number]["icon"], LucideIcon> = {
  Target,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Rocket,
  Route,
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <Reveal>
          <div className="sticky top-24">
            <p className="eyebrow">Bénéfices clés</p>
            <h2 className="section-title">Le cadre pour sortir du flou et avancer fort.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/58">
              Pas de théorie vide. La formation vise une progression visible :
              plus de clarté, plus de constance, plus d’exécution.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];

            return (
              <Reveal key={benefit.title} delay={index * 0.04}>
                <article className="premium-card group h-full p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-[#B800FF]/35 bg-[#B800FF]/12 text-[#B800FF] shadow-[0_0_24px_rgba(184,0,255,0.2)]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-black uppercase text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{benefit.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
