import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OffersSection } from "@/components/sections/offers-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { StorySection } from "@/components/sections/story-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TransformationSection } from "@/components/sections/transformation-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StorySection />
      <PainPointsSection />
      <OffersSection />
      <TestimonialsSection />
      <TransformationSection />
      <FinalCtaSection />
    </main>
  );
}
