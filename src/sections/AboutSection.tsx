import { Flame, Mic2, MoveUpRight } from "lucide-react";

import { AssetPlaceholder } from "@/components/asset-placeholder";
import { Reveal } from "@/components/reveal";
import { assetPlaceholders } from "@/config/landing";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#B800FF]/18 blur-3xl" />
            <AssetPlaceholder
              label={assetPlaceholders.microphone.label}
              src={assetPlaceholders.microphone.src}
              variant="stage"
              className="relative"
            />
            <div className="absolute -bottom-5 left-5 rounded-lg border border-white/10 bg-black/75 p-4 backdrop-blur">
              <Mic2 className="size-6 text-[#B800FF]" />
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                Rapper entrepreneur
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="eyebrow">À propos de Wanis</p>
            <h2 className="section-title">
              Une énergie de scène, une mentalité d’entrepreneur, une méthode de terrain.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-white/64">
              <p>
                Wanis au Mic vient d’un univers où il faut écrire, répéter,
                assumer sa voix et monter sur scène. Cette discipline, il la
                transpose dans l’entrepreneuriat et le développement personnel.
              </p>
              <p>
                Son approche est directe : clarifier ce que tu veux, renforcer
                ton mental, couper la procrastination et construire une ambition
                qui se prouve par l’action.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Transformation", Flame],
                ["Ambition concrète", MoveUpRight],
              ].map(([label, Icon]) => (
                <div
                  key={label as string}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className="size-5 text-[#B800FF]" />
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white">
                    {label as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
