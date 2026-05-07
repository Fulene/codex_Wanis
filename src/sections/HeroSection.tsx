import Link from "next/link";
import { Activity, Play } from "lucide-react";

import { AssetPlaceholder } from "@/components/asset-placeholder";
import { HeroPortraitMotion } from "@/components/hero-portrait-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { SiteNavigation } from "@/components/site-navigation";
import { assetPlaceholders } from "@/config/landing";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <SiteNavigation />

      <section className="mx-auto grid min-h-dvh w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-32">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              <span className="size-2 rounded-full bg-[#B800FF] shadow-[0_0_20px_#B800FF]" />
              Formation mindset, discipline, vision
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Réveille ton potentiel.
              <span className="block text-gradient-purple">Passe au niveau supérieur.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Wanis au Mic en a marre de galérer avec des presta fatigués, alors vient et donne lui ton argent !
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton href="#contact">Réserver mon appel</MagneticButton>
              <Link
                href="#about"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white/82 transition hover:border-[#B800FF]/45 hover:bg-white/[0.07]"
              >
                <Play className="size-4 fill-[#B800FF] text-[#B800FF]" />
                Découvrir Wanis
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                ["Mindset", "Mental clair"],
                ["Discipline", "Cadre solide"],
                ["Action", "Méthode directe"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="text-lg font-black uppercase text-white sm:text-2xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur md:block" />
          <div className="absolute -right-4 bottom-28 hidden h-24 w-24 rounded-full border border-[#B800FF]/45 bg-[#B800FF]/15 blur-[1px] md:block" />
          <HeroPortraitMotion>
            <div className="relative mx-auto max-w-[34rem]">
              <AssetPlaceholder
                label={assetPlaceholders.portrait.label}
                src={assetPlaceholders.portrait.src}
                variant="portrait"
                className="relative rotate-1 border-white/20 shadow-[0_0_90px_rgba(184,0,255,0.32)]"
              />
              <div className="absolute -left-4 top-14 rounded-lg border border-white/10 bg-black/75 p-4 shadow-[0_0_35px_rgba(184,0,255,0.28)] backdrop-blur sm:-left-10">
                <Activity className="size-6 text-[#B800FF]" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Niveau supérieur
                </p>
              </div>
              <div className="absolute -right-3 bottom-10 rounded-lg border border-[#B800FF]/35 bg-[#B800FF]/15 px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur sm:-right-8">
                Vision + Action
              </div>
            </div>
          </HeroPortraitMotion>
        </div>
      </section>
    </header>
  );
}
