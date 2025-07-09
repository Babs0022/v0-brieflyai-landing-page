"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join 50+ creators building faster with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                BrieflyAI
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the future of component generation and content creation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xl px-12 py-6"
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
