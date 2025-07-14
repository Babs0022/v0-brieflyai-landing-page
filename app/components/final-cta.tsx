"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-background rounded-3xl border border-border p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join 50+ creators building faster with{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                BrieflyAI
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the future of component generation and content creation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-xl px-12 py-6"
            >
              <a href="https://dash.brieflyai.xyz" target="_blank" rel="noopener noreferrer">
                Get Started Free
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
