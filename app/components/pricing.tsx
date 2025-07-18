"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Early Access Pricing</h2>
          <p className="text-xl text-muted-foreground">Lock in special pricing as an early adopter</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <Card className="bg-gradient-to-br from-secondary to-background border-green-500/50 border-2 shadow-2xl">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                Early Access Special
              </div>
              <div className="mb-6">
                <div className="text-4xl font-medium mb-2">
                  <span className="text-green-400"> $0</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-left">
                {[
                  "Unlimited component generation",
                  "Advanced content creation wizard",
                  "Priority support",
                  "Early access to new features",
                  "Commercial license included",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg py-4"
              >
                <a href="https://dash.brieflyai.xyz" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
