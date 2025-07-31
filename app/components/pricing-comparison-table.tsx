"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function PricingComparisonTable() {
  const features = [
    {
      name: "AI Copilot Usage",
      free: "Limited",
      pro: "Unlimited",
      business: "Unlimited (Higher Priority)",
    },
    {
      name: "Content Generation",
      free: "Basic",
      pro: "Advanced",
      business: "Advanced",
    },
    {
      name: "Prompt Optimization",
      free: "Standard",
      pro: "Priority",
      business: "Priority",
    },
    {
      name: "Specialized Tools Access",
      free: false,
      pro: true,
      business: true,
    },
    {
      name: "Email Support",
      free: "Community",
      pro: "Priority",
      business: "Priority",
    },
    {
      name: "Commercial License",
      free: false,
      pro: true,
      business: true,
    },
    {
      name: "Dedicated Account Manager",
      free: false,
      pro: false,
      business: true,
    },
    {
      name: "Early Access to New Features",
      free: false,
      pro: true,
      business: true,
    },
    {
      name: "Custom Integrations",
      free: false,
      pro: false,
      business: "Upon Request",
    },
    {
      name: "Enhanced Security Features",
      free: false,
      pro: false,
      business: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Detailed Plan Comparison</h2>
          <p className="text-xl text-muted-foreground font-light">Find the perfect plan for your needs</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="overflow-x-auto">
          <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 font-semibold text-lg">Feature</th>
                  <th className="py-4 px-4 font-semibold text-lg text-center">Free</th>
                  <th className="py-4 px-4 font-semibold text-lg text-center">Pro</th>
                  <th className="py-4 px-4 font-semibold text-lg text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.free === "boolean" ? (
                        feature.free ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground font-light">{feature.free}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground font-light">{feature.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.business === "boolean" ? (
                        feature.business ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground font-light">{feature.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
