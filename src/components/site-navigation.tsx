"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mic2 } from "lucide-react";

import { brand, navItems } from "@/config/landing";
import { cn } from "@/lib/utils";

export function SiteNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 18);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        updateScrolled();
        frame = 0;
      });
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-[#050505]/76 py-0 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-transparent bg-transparent py-1",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="group inline-flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg border border-[#B800FF]/45 bg-[#B800FF]/15 text-[#B800FF] shadow-[0_0_28px_rgba(184,0,255,0.3)]">
            <Mic2 className="size-5" />
          </span>
          <span className="text-sm font-black uppercase tracking-[0.22em] text-white">
            {brand.name}
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="hidden rounded-lg border border-white/12 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#B800FF]/60 hover:bg-[#B800FF]/15 sm:inline-flex"
        >
          Appel
        </Link>
      </div>
    </nav>
  );
}
