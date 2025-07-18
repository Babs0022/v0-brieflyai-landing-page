"use client"

import { useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ProblemStatement } from "./components/problem-statement"
import { SolutionPreview } from "./components/solution-preview"
import { FeatureDeepDive } from "./components/feature-deep-dive"
import { ComparisonTable } from "./components/comparison-table"
import { UseCases } from "./components/use-cases"
import { Pricing } from "./components/pricing"
import { FAQ } from "./components/faq"
import { FinalCTA } from "./components/final-cta"
import { Footer } from "./components/footer"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection y={y} />
      <ProblemStatement />
      <SolutionPreview />
      <FeatureDeepDive />
      <ComparisonTable />
      <UseCases />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
