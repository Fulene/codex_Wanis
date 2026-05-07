"use client";

import { FormEvent, useState } from "react";
import { PhoneCall } from "lucide-react";

import { AssetPlaceholder } from "@/components/asset-placeholder";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { assetPlaceholders, contactWebhook } from "@/config/landing";

export function FinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.info("Contact form payload ready for webhook integration", {
      provider: contactWebhook.providerHint,
      endpoint: contactWebhook.endpoint,
      payload,
    });

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-shell pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-lg border border-[#B800FF]/25 bg-[linear-gradient(135deg,rgba(184,0,255,0.24),rgba(255,255,255,0.04)_38%,rgba(5,5,5,0.92))] p-5 shadow-[0_0_90px_rgba(184,0,255,0.18)] sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B800FF]/25 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Réserver un appel</p>
              <h2 className="section-title">Prêt à enclencher ta transformation ?</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
                Laisse tes coordonnées et réserve un appel pour découvrir si la
                  formation est faite pour toi.
              </p>
              <div className="mt-8 hidden max-w-sm lg:block">
                <AssetPlaceholder
                  label={assetPlaceholders.mindset.label}
                  src={assetPlaceholders.mindset.src}
                  variant="wide"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-white/10 bg-black/55 p-5 backdrop-blur-xl sm:p-7"
              data-webhook-provider={contactWebhook.providerHint}
              data-webhook-endpoint={contactWebhook.endpoint}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg border border-[#B800FF]/35 bg-[#B800FF]/12 text-[#B800FF]">
                  <PhoneCall className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
                    Demande d’appel
                  </p>
                  <p className="mt-1 text-xs text-white/45">Réponse personnalisée</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field-label">
                  Prénom
                  <input
                    required
                    name="firstName"
                    autoComplete="given-name"
                    className="field-input"
                    placeholder="Ton prénom"
                  />
                </label>
                <label className="field-label">
                  Nom
                  <input
                    required
                    name="lastName"
                    autoComplete="family-name"
                    className="field-input"
                    placeholder="Ton nom"
                  />
                </label>
              </div>

              <label className="field-label mt-4">
                Téléphone
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="field-input"
                  placeholder="+33 6 00 00 00 00"
                />
              </label>

              <div className="mt-7">
                <MagneticButton type="submit" className="w-full">
                  Réserver mon appel
                </MagneticButton>
              </div>

              {submitted ? (
                <p className="mt-4 rounded-lg border border-[#B800FF]/25 bg-[#B800FF]/10 px-4 py-3 text-sm text-white/75">
                  Merci. Tes coordonnées sont prêtes pour la future intégration webhook.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
