"use client"

import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Pricing } from "@/app/components/pricing"
import { useState } from "react"

export default function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-20">
        {" "}
        {/* Adjust padding to account for fixed header */}
        <Pricing />
        {/* PricingFAQ and PricingComparisonTable are now rendered inside the Pricing component */}
      </main>
      <Footer />
    </div>
  )
}
