"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type HeroPortraitMotionProps = {
  children: ReactNode;
};

export function HeroPortraitMotion({ children }: HeroPortraitMotionProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 42, scale: 0.86, rotate: -5, filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.05, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden
        className="absolute -inset-10 rounded-full bg-[#B800FF]/22 blur-3xl"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: [0.25, 0.6, 0.3], scale: [0.88, 1.08, 0.94] }}
        transition={{ delay: 1.25, duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-5 top-8 h-24 w-24 rounded-full border border-[#B800FF]/50"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 0.85, 0], scale: [0.75, 1.45, 1.8] }}
        transition={{ delay: 1.55, duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0] }}
        transition={{ delay: 1.8, duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
