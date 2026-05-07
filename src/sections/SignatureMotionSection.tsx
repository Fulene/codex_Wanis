"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic2, MoveUpRight } from "lucide-react";

const orbitNodes = [
  { angle: 24, delay: 0 },
  { angle: 96, delay: 0.15 },
  { angle: 168, delay: 0.3 },
  { angle: 240, delay: 0.45 },
  { angle: 312, delay: 0.6 },
];

const waveform = [
  22, 38, 28, 64, 44, 78, 36, 58, 92, 48, 72, 34, 54, 86, 40, 62, 30, 74,
];

const particles = [
  { x: "12%", y: "18%", size: 5, delay: 0.1, duration: 3.1 },
  { x: "82%", y: "16%", size: 7, delay: 0.4, duration: 3.8 },
  { x: "68%", y: "72%", size: 4, delay: 0.8, duration: 2.9 },
  { x: "24%", y: "76%", size: 6, delay: 1.1, duration: 3.5 },
  { x: "47%", y: "10%", size: 3, delay: 1.4, duration: 2.6 },
  { x: "91%", y: "48%", size: 5, delay: 1.7, duration: 3.2 },
  { x: "7%", y: "54%", size: 4, delay: 2.0, duration: 2.8 },
  { x: "40%", y: "88%", size: 6, delay: 2.3, duration: 3.9 },
];

export function SignatureMotionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const haloY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -135]);
  const beamScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.78, 1.14, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-16 px-5 pb-16 pt-24 sm:-mt-24 sm:px-8 sm:pb-24 sm:pt-32"
      aria-label="Signature Wanis au Mic"
    >
      <motion.div
        aria-hidden
        style={{ y: haloY }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B800FF]/14 blur-3xl sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[12%] bottom-0 h-64 w-64 rounded-full bg-[#B800FF]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Énergie en mouvement</p>
          <h2 className="section-title">
            Transforme ton déclic en trajectoire.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
            Une progression qui part du mental, traverse la discipline et finit
            dans l’action mesurable.
          </p>
        </motion.div>

        <motion.div className="relative z-10 mx-auto flex aspect-square w-full max-w-[40rem] items-center justify-center overflow-hidden [contain:paint]">
          <motion.div
            aria-hidden
            className="absolute h-[112%] w-16 rotate-45 bg-gradient-to-b from-transparent via-[#B800FF]/24 to-transparent blur-xl sm:w-24"
            animate={{ x: ["-42%", "42%", "-42%"], opacity: [0.22, 0.58, 0.22] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute h-[102%] w-12 -rotate-45 bg-gradient-to-b from-transparent via-fuchsia-400/18 to-transparent blur-xl sm:w-20"
            animate={{ x: ["34%", "-34%", "34%"], opacity: [0.18, 0.5, 0.18] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {particles.map((particle, index) => (
            <motion.span
              key={`${particle.x}-${particle.y}`}
              aria-hidden
              className="absolute rounded-full bg-white shadow-[0_0_14px_rgba(184,0,255,0.7)] will-change-transform"
              style={{
                left: particle.x,
                top: particle.y,
                height: particle.size,
                width: particle.size,
              }}
              animate={{
                opacity: [0, 0.95, 0.25, 0],
                scale: [0.5, 1.7, 0.8],
                y: [0, -18 - index * 2, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            aria-hidden
            style={{ scale: beamScale }}
            className="absolute h-[88%] w-[88%] rounded-full border border-[#B800FF]/22 bg-[conic-gradient(from_180deg,transparent,rgba(184,0,255,0.3),transparent,rgba(255,255,255,0.14),transparent,rgba(255,0,208,0.18),transparent)] blur-[0.3px] will-change-transform"
          />
          <motion.div
            aria-hidden
            style={{ rotate: ringRotate }}
            className="absolute h-[78%] w-[78%] rounded-full border border-dashed border-[#B800FF]/50 shadow-[0_0_34px_rgba(184,0,255,0.18)]"
          />
          <motion.div
            aria-hidden
            style={{ rotate: counterRotate }}
            className="absolute h-[58%] w-[58%] rounded-full border border-white/15"
          />
          <motion.div
            aria-hidden
            className="absolute h-[38%] w-[38%] rounded-full border border-[#B800FF]/40"
            animate={{ scale: [0.82, 1.35], opacity: [0.55, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute h-[46%] w-[46%] rounded-full border border-fuchsia-300/30"
            animate={{ scale: [0.82, 1.3], opacity: [0.45, 0] }}
            transition={{ duration: 1.7, delay: 0.55, repeat: Infinity, ease: "easeOut" }}
          />

          {orbitNodes.map((item) => (
            <motion.div
              key={item.angle}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${item.angle}deg) translateX(clamp(9.5rem, 21vw, 15.5rem)) rotate(-${item.angle}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.55, ease: "easeOut" }}
            >
              <motion.span
                className="block size-3 rounded-full border border-white/35 bg-[#B800FF] shadow-[0_0_22px_rgba(184,0,255,0.75)]"
                animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.55, 1, 0.55] }}
                transition={{
                  duration: 2.6,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}

          <motion.div
            className="relative z-10 flex size-44 flex-col items-center justify-center rounded-full border border-[#B800FF]/60 bg-[radial-gradient(circle_at_50%_35%,rgba(184,0,255,0.22),rgba(10,0,14,0.72)_58%,rgba(5,5,5,0.58))] text-center shadow-[0_0_92px_rgba(184,0,255,0.48)] backdrop-blur-md sm:size-56"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[#B800FF]/18"
              animate={{ scale: [1, 1.2, 1], opacity: [0.62, 0.16, 0.62] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative flex size-16 items-center justify-center rounded-full bg-[#B800FF]/12"
              animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Mic2 className="size-10 text-[#B800FF] sm:size-12" />
            </motion.div>
            <p className="relative mt-4 text-xs font-black uppercase tracking-[0.28em] text-white sm:text-sm">
              Wanis au Mic
            </p>
            <MoveUpRight className="relative mt-3 size-5 text-white/45" />
          </motion.div>

          <div className="absolute bottom-5 left-1/2 z-20 flex w-[78%] -translate-x-1/2 items-end justify-center gap-1.5 sm:bottom-8">
            {waveform.map((height, index) => (
              <motion.span
                key={`${height}-${index}`}
                className="w-1 rounded-full bg-gradient-to-t from-[#B800FF] to-white/80 shadow-[0_0_16px_rgba(184,0,255,0.45)] sm:w-1.5"
                style={{ height }}
                animate={{
                  scaleY: [0.26, 1.28, 0.48, 1.04, 0.38],
                  opacity: [0.45, 1, 0.7, 1, 0.55],
                }}
                transition={{
                  duration: 0.92 + (index % 4) * 0.12,
                  delay: index * 0.035,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
