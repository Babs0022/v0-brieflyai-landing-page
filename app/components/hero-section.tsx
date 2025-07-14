"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  y: any
}

export function HeroSection({ y }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-700/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Build React Components &<br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Create Content
            </span>
            <br />
            in Under 2 Minutes
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            The AI copilot that turns plain English into production-ready code and professional content.
            <span className="text-green-400"> No coding required.</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8">Trusted by Amazing Creatives worldwide.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg px-8 py-4"
            >
              <a href="https://dash.brieflyai.xyz" target="_blank" rel="noopener noreferrer">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6 shadow-2xl">
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-muted-foreground ml-4">BrieflyAI Terminal</span>
              </div>
              <div className="space-y-2">
                <div className="text-green-400">{">"} build a pricing section with 3 tiers</div>
                <div className="text-muted-foreground">✨ Generating React component...</div>
                <div className="text-green-400">✅ Component ready in 1.8 seconds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
