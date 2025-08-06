"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Sparkles, Code } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function UseCases() {
  const cases = [
    {
      title: "Startup Founder",
      subtitle: "From idea to launch with strategic guidance",
      description:
        "Get comprehensive business strategy, market analysis, and execution roadmaps—not just generic advice.",
      icon: Rocket,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Content Creator",
      subtitle: "Scale your creative output intelligently",
      description: "Strategic content planning that aligns with your brand goals and audience growth objectives.",
      icon: Users,
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Creative Professional",
      subtitle: "Enhance your creative process with AI insights",
      description: "Get strategic creative direction and workflow optimization tailored to your artistic vision.",
      icon: Sparkles,
      color: "from-purple-700 to-purple-900",
    },
    {
      title: "Developer",
      subtitle: "Architectural thinking, not just code generation",
      description: "Strategic development guidance that considers scalability, maintainability, and best practices.",
      icon: Code,
      color: "from-purple-800 to-purple-950",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Perfect for every type of creator</h2>
          <p className="text-xl text-muted-foreground">See how KorbinAI transforms workflows across different roles</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-secondary/50 backdrop-blur-sm border-border hover:border-purple-600 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">{useCase.title}</h3>
                  <p className="text-purple-400 mb-4">{useCase.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
