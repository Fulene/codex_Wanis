"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const yOne = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 hex-grid opacity-45" />
      <div className="absolute inset-0 noise-layer opacity-[0.055]" />
      <motion.div
        style={{ y: yOne }}
        className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#B800FF]/35 blur-3xl sm:h-[32rem] sm:w-[32rem]"
      />
      <motion.div
        style={{ y: yTwo }}
        className="absolute -left-36 top-[34rem] h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div className="absolute left-1/2 top-0 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B800FF]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </div>
  );
}
