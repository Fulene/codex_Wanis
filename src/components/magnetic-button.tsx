"use client";

import Link from "next/link";
import { MouseEvent, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  href,
  type = "button",
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.18,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    });
  };

  const content = (
    <motion.span
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#B800FF] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(184,0,255,0.45)] transition-colors hover:bg-[#d426ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B800FF] sm:min-h-14 sm:px-8",
        className,
      )}
      animate={offset}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}
