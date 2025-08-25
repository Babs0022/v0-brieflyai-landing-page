"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/components/analytics"

interface HeroSectionProps {
  y: any
}

export function HeroSection({ y }: HeroSectionProps) {
  const handleCTAClick = () => {
    trackEvent("cta_click", {
      event_category: "engagement",
      event_label: "hero_start_building",
      page_location: "hero_section",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20">
      {/* Add semantic markup */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 flex items-center space-x-2 shadow-sm">
              <Sparkles className="w-5 h-5 text-purple-600" aria-hidden="true" />
              <span className="text-purple-700 font-medium text-sm">Powered by Advanced AI Frameworks</span>
            </div>
          </div>

          <header>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.85] tracking-tight text-gray-900">
              <span className="gradient-text">An AI Assistant</span>
              <br />
              <span className="sr-only">That Actually Gets It - </span>
              That Actually Gets It
            </h1>
          </header>

          <div className="mb-6">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-normal">
              Your most resourceful partner for{" "}
              <strong className="text-purple-600 font-medium">
                brainstorming, coding, research, content creation, and strategic planning.
              </strong>
              <br />
              Built to understand what you need before you even ask.
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-10 font-normal">
              Democratizing the creation process for everyone, everywhere.
            </p>
          </div>

          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            role="navigation"
            aria-label="Primary actions"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-base md:text-lg px-8 py-4 h-14 font-medium hover-lift modern-shadow-lg border-0"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Started Free with KorbinAI - Open in new tab"
                onClick={handleCTAClick}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
