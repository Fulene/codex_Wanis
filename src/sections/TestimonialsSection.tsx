import { Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { testimonials } from "@/config/landing";

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Ils ont changé de rythme</p>
          <h2 className="section-title">Des déclics qui deviennent des décisions.</h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08}>
            <article className="premium-card h-full p-6">
              <Quote className="size-8 text-[#B800FF]" />
              <p className="mt-7 text-base leading-7 text-white/74">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-black uppercase text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/45">{testimonial.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
