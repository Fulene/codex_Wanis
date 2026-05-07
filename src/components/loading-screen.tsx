"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="absolute inset-0 hex-grid opacity-35" />
          <motion.div
            className="absolute h-52 w-52 rounded-full bg-[#B800FF]/35 blur-3xl"
            animate={{ scale: [0.75, 1.15, 0.9], opacity: [0.35, 0.75, 0.45] }}
            transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#B800FF]">
              Wanis
            </p>
            <p className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
              au Mic
            </p>
            <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-[#B800FF]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
