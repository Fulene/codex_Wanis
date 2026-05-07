import { Plus } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { faqs } from "@/config/landing";

export function FaqSection() {
  return (
    <section id="faq" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Les réponses avant ton appel.</h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-[#B800FF]/35">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black uppercase text-white">
                  {faq.question}
                  <Plus className="size-5 shrink-0 text-[#B800FF] transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
