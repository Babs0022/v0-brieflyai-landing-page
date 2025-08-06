"use client"

import { motion } from "framer-motion"
import { Check, X } from 'lucide-react'

export function PricingComparisonTable() {
  const features = [
    {
      name: "Korbin Copilot",
      free: "Limited access to Copilot (powered by Gemini 2.5 Pro)",
      pro: "Unlimited access to Copilot (powered by Gemini 2.5 Pro)",
      unlimited: "Everything in Pro",
    },
    {
      name: "Monthly Credits",
      free: "100 (across specialized tools)",
      pro: "1500 (across specialized tools)",
      unlimited: "Unlimited (across specialized tools)",
    },
    {
      name: "Unlock Trash",
      free: "Store up to 10 deleted conversations",
      pro: "Store more deleted conversations",
      unlimited: "Store Unlimited deleted conversations",
    },
    {
      name: "Copilot Personalizer",
      free: "-",
      pro: "Yes",
      unlimited: "Copilot Personalizer",
    },
    {
      name: "Early Access",
      free: "-",
      pro: "-",
      unlimited: "Yes, to new features",
    },
    {
      name: "Custom Integration",
      free: "-",
      pro: "-",
      unlimited: "Yes (request)",
    },
    {
      name: "Support",
      free: "Community Support",
      pro: "Priority email support",
      unlimited: "Priority email support",
    },
  ]

  const renderCellContent = (content: string | boolean) => {
    if (typeof content === "boolean") {
      return content ? (
        <Check className="w-5 h-5 text-purple-400 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground mx-auto" />
      )
    }
    return <span className="text-muted-foreground font-light">{content}</span>
  }

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
                  <th className="py-4 px-4 font-semibold text-lg text-center">Korbin AI Free</th>
                  <th className="py-4 px-4 font-semibold text-lg text-center">Korbin AI Pro (Most Popular)</th>
                  <th className="py-4 px-4 font-semibold text-lg text-center">Korbin AI Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    <td className="py-4 px-4 text-center">{renderCellContent(feature.free)}</td>
                    <td className="py-4 px-4 text-center">{renderCellContent(feature.pro)}</td>
                    <td className="py-4 px-4 text-center">{renderCellContent(feature.unlimited)}</td>
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
