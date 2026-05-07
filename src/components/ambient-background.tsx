export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 hex-grid opacity-45" />
      <div className="absolute inset-0 noise-layer opacity-[0.055]" />
      <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#B800FF]/24 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      <div className="absolute -left-36 top-[34rem] h-72 w-72 rounded-full bg-fuchsia-600/14 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="absolute left-1/2 top-0 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B800FF]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </div>
  );
}
