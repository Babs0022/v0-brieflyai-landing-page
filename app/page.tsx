"use client"

import { useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { useScrollTracking } from "@/hooks/use-scroll-tracking"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ProblemStatement } from "./components/problem-statement"
import { CopilotShowcase } from "./components/copilot-showcase"
import { SpecializedTools } from "./components/specialized-tools"
import { ComparisonTable } from "./components/comparison-table"
import { UseCases } from "./components/use-cases"
import { FAQ } from "./components/faq"
import { FinalCTA } from "./components/final-cta"
import { Footer } from "./components/footer"

export default function LandingPage() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

// Add scroll tracking
useScrollTracking()

return (
  <>
    {/* JSON-LD for Organization */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KorbinAI",
          url: "https://korbinai.com",
          logo: "https://korbinai.com/logo.png",
          description:
            "An AI assistant that actually gets it. Your most resourceful partner for brainstorming, coding, research, content creation, and strategic planning.",
          contactPoint: {
            "@type": "ContactPoint",
            email: "team@korbinai.com",
            contactType: "customer service",
          },
          sameAs: ["https://twitter.com/korbinai"],
        }),
      }}
    />

    {/* JSON-LD for SoftwareApplication */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "KorbinAI",
          description:
            "An AI assistant that actually gets it. Built on advanced frameworks for strategic thinking and contextual understanding.",
          url: "https://korbinai.com",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          featureList: [
            "Strategic brainstorming and planning",
            "Intelligent development guidance",
            "Contextual research and analysis",
            "Strategic content creation",
            "Specialized tools for creators, artists, prompters, and analysts",
          ],
        }),
      }}
    />

    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection y={y} />
        <ProblemStatement />
        <CopilotShowcase />
        <SpecializedTools />
        <ComparisonTable />
        <UseCases />
        {/* The Pricing section is now on its own page */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  </>
)
}
