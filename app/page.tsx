"use client"

import { useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { useScrollTracking } from "@/hooks/use-scroll-tracking"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ProblemStatement } from "./components/problem-statement"
import { CopilotShowcase } from "./components/copilot-showcase"
import { UseCases } from "./components/use-cases"
import { Testimonials } from "./components/testimonials"
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
      {/* Enhanced JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KorbinAI",
            alternateName: "Korbin AI",
            url: "https://korbinai.com",
            logo: {
              "@type": "ImageObject",
              url: "https://korbinai.com/logo.png",
              width: 512,
              height: 512,
            },
            description:
              "KorbinAI is a strategic AI assistant that delivers production-ready code, contextual insights, and professional content. Built for creators, developers, and professionals who need more than generic AI responses.",
            foundingDate: "2024",
            contactPoint: {
              "@type": "ContactPoint",
              email: "team@korbinai.com",
              contactType: "customer service",
              availableLanguage: "English",
            },
            sameAs: ["https://twitter.com/korbinai"],
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* Enhanced JSON-LD for SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "KorbinAI",
            alternateName: "Korbin AI Assistant",
            description:
              "Strategic AI copilot that delivers production-ready React components, strategic insights, and contextual solutions. Features specialized tools for creators, developers, prompters, and analysts.",
            url: "https://korbinai.com",
            applicationCategory: "ProductivityApplication",
            applicationSubCategory: "AI Assistant",
            operatingSystem: "Web Browser",
            browserRequirements: "Modern web browser with JavaScript enabled",
            softwareVersion: "2.0",
            datePublished: "2024-01-01",
            dateModified: "2025-01-25",
            author: {
              "@type": "Organization",
              name: "KorbinAI",
            },
            offers: [
              {
                "@type": "Offer",
                name: "KorbinAI Free",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description: "Free tier with limited access to AI copilot and specialized tools",
              },
              {
                "@type": "Offer",
                name: "KorbinAI Pro",
                price: "20",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description: "Professional tier with unlimited copilot access and advanced features",
              },
              {
                "@type": "Offer",
                name: "KorbinAI Unlimited",
                price: "75",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description: "Enterprise tier with unlimited usage and priority support",
              },
            ],
            featureList: [
              "Strategic brainstorming and planning",
              "Production-ready React component generation",
              "Intelligent development guidance",
              "Contextual research and analysis",
              "Strategic content creation",
              "AI prompt engineering tools",
              "Visual design and image generation",
              "Data analysis and structured data generation",
            ],
            screenshot: "https://korbinai.com/og-image.png",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* JSON-LD for WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "KorbinAI",
            url: "https://korbinai.com",
            description: "Strategic AI assistant for production-ready code and contextual solutions",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://app.korbinai.com/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "KorbinAI",
              logo: {
                "@type": "ImageObject",
                url: "https://korbinai.com/logo.png",
              },
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <HeroSection y={y} />
          <ProblemStatement />
          <CopilotShowcase />
          <UseCases />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
