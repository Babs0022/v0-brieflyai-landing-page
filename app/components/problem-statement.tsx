"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, Target } from 'lucide-react'

export function ProblemStatement() {
  const problems = [
    {
      icon: Brain,
      title: "Generic AI Responses",
      description: "Most AI tools give cookie-cutter answers that don't understand your specific context or goals",
    },
    {
      icon: MessageSquare,
      title: "Fragmented Workflow",
      description: "Jumping between multiple tools for brainstorming, coding, research, and content creation",
    },
    {
      icon: Target,
      description:
        "AI that executes tasks but doesn't help you think through the bigger picture or guide your decisions",
    },
  ]

  return (
    <section id="problem" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
        >
          Most AI assistants are just glorified search engines
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          They lack the strategic thinking and contextual understanding you need to truly accelerate your work
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
