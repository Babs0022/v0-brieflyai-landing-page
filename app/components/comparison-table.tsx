"use client"

import { motion } from "framer-motion"

export function ComparisonTable() {
  const competitors = [
    { name: "ChatGPT", understanding: 2, strategy: 1, context: 2, specialization: 1 },
    { name: "Claude", understanding: 3, strategy: 2, context: 3, specialization: 1 },
    { name: "Copilot", understanding: 2, strategy: 1, context: 2, specialization: 2 },
    { name: "Gemini", understanding: 3, strategy: 2, context: 2, specialization: 1 },
    { name: "KorbinAI", understanding: 5, strategy: 5, context: 5, specialization: 5 },
  ]

  const ScoreBar = ({ score }: { score: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`w-3 h-3 rounded-full ${i < score ? "bg-purple-400" : "bg-muted"}`} />
      ))}
    </div>
  )

  return (
    <section id="comparison" className="py-20 bg-background">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why KorbinAI is Different</h2>
        <p className="text-xl text-muted-foreground font-light">
          Built for strategic thinking, not just task execution
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="overflow-x-auto">
        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">AI Assistant</th>
                <th className="text-center py-4 px-4 font-semibold">Contextual Understanding</th>
                <th className="text-center py-4 px-4 font-semibold">Strategic Thinking</th>
                <th className="text-center py-4 px-4 font-semibold">Context Retention</th>
                <th className="text-center py-4 px-4 font-semibold">Specialized Tools</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${competitor.name === "KorbinAI" ? "bg-purple-500/10" : ""}`}
                >
                  <td className="py-4 px-4 font-medium">
                    {competitor.name === "KorbinAI" && <span className="text-purple-400">👑 </span>}
                    {competitor.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <ScoreBar score={competitor.understanding} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <ScoreBar score={competitor.strategy} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <ScoreBar score={competitor.context} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <ScoreBar score={competitor.specialization} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
