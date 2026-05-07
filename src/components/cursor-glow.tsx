"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 180, damping: 28, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 28, mass: 0.3 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="cursor-glow pointer-events-none fixed z-50 h-80 w-80 rounded-full bg-[#B800FF]/15 blur-3xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
