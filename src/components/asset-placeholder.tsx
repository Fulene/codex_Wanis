import Image from "next/image";
import { Mic2, UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

type AssetPlaceholderProps = {
  label: string;
  src?: string;
  variant?: "portrait" | "stage" | "wide";
  className?: string;
};

export function AssetPlaceholder({
  label,
  src,
  variant = "portrait",
  className,
}: AssetPlaceholderProps) {
  const isPortrait = variant === "portrait";
  const hasImage = Boolean(src);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0f] shadow-[0_0_60px_rgba(184,0,255,0.22)]",
        isPortrait ? "aspect-[4/5]" : "aspect-[16/10]",
        className,
      )}
      data-asset-slot={label}
    >
      {hasImage ? (
        <Image
          src={src as string}
          alt={label}
          fill
          priority={isPortrait}
          sizes={isPortrait ? "(min-width: 1024px) 34rem, 90vw" : "90vw"}
          className="object-cover object-[50%_34%] brightness-110 contrast-110 saturate-110"
        />
      ) : null}
      <div
        className={
          hasImage
            ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%,rgba(5,5,5,0.28)_82%,rgba(5,5,5,0.62)),radial-gradient(circle_at_78%_18%,rgba(184,0,255,0.16),transparent_32%)]"
            : "absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(184,0,255,0.32),transparent_36%),linear-gradient(135deg,rgba(184,0,255,0.16),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(5,5,5,0.2)_50%,rgba(5,5,5,0.78))]"
        }
      />
      <div className="absolute inset-4 rounded-lg border border-white/10" />
      <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-[#B800FF]/35 blur-2xl" />
      {!hasImage ? (
        <div className="absolute left-8 top-8 flex size-16 items-center justify-center rounded-lg border border-[#B800FF]/45 bg-black/45 text-[#B800FF] shadow-[0_0_30px_rgba(184,0,255,0.35)]">
          {isPortrait ? <UserRound className="size-8" /> : <Mic2 className="size-8" />}
        </div>
      ) : null}
      <div className="absolute inset-x-6 bottom-6 z-10">
        {!hasImage ? (
          <>
            <div className="h-2 w-24 rounded-full bg-white/20" />
            <div className="mt-3 h-2 w-40 max-w-full rounded-full bg-[#B800FF]/45" />
          </>
        ) : null}
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
          {label}
        </p>
      </div>
    </div>
  );
}
