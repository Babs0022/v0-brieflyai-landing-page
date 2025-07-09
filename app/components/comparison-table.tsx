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
        <div key={i} className={`w-3 h-3 rounded-full ${i < score ? "bg-cyan-400" : "bg-slate-600"}`} />
      ))}
    </div>
  )

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BrieflyAI?</h2>
          <p className="text-xl text-slate-300">See how we compare to other solutions</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="overflow-x-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-4 px-4">Tool</th>
                  <th className="text-center py-4 px-4">Speed</th>
                  <th className="text-center py-4 px-4">Ease of Use</th>
                  <th className="text-center py-4 px-4">Integration</th>
                  <th className="text-center py-4 px-4">Output Quality</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-700 ${competitor.name === "BrieflyAI" ? "bg-cyan-500/10" : ""}`}
                  >
                    <td className="py-4 px-4 font-semibold">
                      {competitor.name === "BrieflyAI" && <span className="text-cyan-400">👑 </span>}
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
