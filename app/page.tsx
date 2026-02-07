import { NeuralBackground } from "@/components/neural-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { PresaleSection } from "@/components/presale-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <UseCasesSection />
      <ArchitectureSection />
      <BenefitsSection />
      <TokenomicsSection />
      <RoadmapSection />
      <PresaleSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
