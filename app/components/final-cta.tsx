"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent, trackConversion } from "@/components/analytics"

export function FinalCTA() {
  const handleFinalCTAClick = () => {
    trackEvent("final_cta_click", {
      event_category: "conversion",
      event_label: "bottom_cta_signup",
      page_location: "final_cta_section",
      value: 0,
    })

    trackConversion("final_signup_attempt", {
      currency: "USD",
      value: 0,
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-background rounded-2xl border border-border p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Join 50+ creators building faster with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                KorbinAI
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your free trial today and experience the future of component generation and content creation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-xl px-12 py-6"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFinalCTAClick}
              >
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
