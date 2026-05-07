import { AmbientBackground } from "@/components/ambient-background";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { AboutSection } from "@/sections/AboutSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { FaqSection } from "@/sections/FaqSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { FooterSection } from "@/sections/FooterSection";
import { HeroSection } from "@/sections/HeroSection";
import { SignatureMotionSection } from "@/sections/SignatureMotionSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ValuePropositionSection } from "@/sections/ValuePropositionSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <AmbientBackground />
      <main className="min-h-dvh overflow-hidden">
        <HeroSection />
        <SignatureMotionSection />
        <ValuePropositionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
