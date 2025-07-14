"use client"

import { motion } from "framer-motion"
import { Clock, Code, Users } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      icon: Clock,
      title: "Hours on Simple Tasks",
      description: "Spending entire afternoons on components that should take minutes",
    },
    {
      icon: Code,
      title: "Slow Traditional Tools",
      description: "Generic code generators that need extensive customization",
    },
    {
      icon: Users,
      title: "Generic Outputs",
      description: "Cookie-cutter solutions that don't match your brand or needs",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-medium mb-4"
        >
          Stop spending hours on tasks that should take minutes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-normal mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
