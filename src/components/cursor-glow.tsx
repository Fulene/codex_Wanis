"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 180, damping: 28, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 28, mass: 0.3 });

  useEffect(() => {
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        x.set(event.clientX - 96);
        y.set(event.clientY - 96);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="cursor-glow pointer-events-none fixed z-50 h-48 w-48 rounded-full bg-[#B800FF]/12 blur-2xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
