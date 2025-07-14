"use client"

import { motion } from "framer-motion"

export function ComparisonTable() {
  const competitors = [
    { name: "GitHub Copilot", speed: 2, ease: 2, integration: 3, quality: 3 },
    { name: "ChatGPT", speed: 2, ease: 3, integration: 1, quality: 2 },
    { name: "No-code tools", speed: 1, ease: 4, integration: 2, quality: 2 },
    { name: "Traditional tools", speed: 1, ease: 1, integration: 2, quality: 3 },
    { name: "BrieflyAI", speed: 5, ease: 5, integration: 5, quality: 5 },
  ]

  const ScoreBar = ({ score }: { score: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`w-3 h-3 rounded-full ${i < score ? "bg-green-400" : "bg-muted"}`} />
      ))}
    </div>
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Choose BrieflyAI?</h2>
          <p className="text-xl text-muted-foreground">See how we compare to other solutions</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="overflow-x-auto">
          <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-normal">Tool</th>
                  <th className="text-center py-4 px-4 font-normal">Speed</th>
                  <th className="text-center py-4 px-4 font-normal">Ease of Use</th>
                  <th className="text-center py-4 px-4 font-normal">Integration</th>
                  <th className="text-center py-4 px-4 font-normal">Output Quality</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${competitor.name === "BrieflyAI" ? "bg-green-500/10" : ""}`}
                  >
                    <td className="py-4 px-4 font-normal">
                      {competitor.name === "BrieflyAI" && <span className="text-green-400">👑 </span>}
                      {competitor.name}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <ScoreBar score={competitor.speed} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <ScoreBar score={competitor.ease} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <ScoreBar score={competitor.integration} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <ScoreBar score={competitor.quality} />
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
