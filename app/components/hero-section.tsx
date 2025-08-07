"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from 'lucide-react'
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <motion.div style={{ y }} className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium text-sm">Powered by Advanced AI Frameworks</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              An AI Assistant
            </span>
            <br />
            That Actually Gets It
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Your most resourceful partner for{" "}
            <span className="text-purple-400 font-medium">
              brainstorming, coding, research, content creation, and strategic planning.
            </span>
            <br />
            Built to understand what you need before you even ask.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 font-light">
            Democratizing the creation process for everyone, everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-base md:text-lg px-8 py-4 h-14 font-medium"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Experience KorbinAI Copilot - Free trial"
                onClick={handleCTAClick}
              >
                Experience the Copilot
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <figure className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6 shadow-2xl">
            <div className="bg-background rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4" aria-label="AI Copilot interface">
                <div className="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" aria-hidden="true" />
                <div className="w-3 h-3 bg-purple-500 rounded-full" aria-hidden="true" />
                <span className="text-muted-foreground ml-4 font-medium">KorbinAI Copilot</span>
              </div>
              <div className="space-y-3">
                <div className="text-blue-400 font-medium">
                  👤 User: I need to launch a SaaS product but don't know where to start
                </div>
                <div className="text-purple-400 font-medium">
                  🤖 Korbin: I'll help you create a comprehensive launch strategy. Let me break this down:
                </div>
                <div className="text-muted-foreground ml-4">✨ Analyzing market positioning...</div>
                <div className="text-muted-foreground ml-4">📊 Creating go-to-market framework...</div>
                <div className="text-muted-foreground ml-4">🎯 Developing content strategy...</div>
                <div className="text-purple-400 font-medium">✅ Complete launch roadmap ready with actionable steps</div>
              </div>
            </div>
            <figcaption className="sr-only">
              Example of KorbinAI Copilot providing strategic guidance for SaaS product launch
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
