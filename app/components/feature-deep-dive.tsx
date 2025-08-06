"use client"

import { motion } from "framer-motion"
import { Code, Wand2, Route } from 'lucide-react'

export function FeatureDeepDive() {
  const features = [
    {
      title: "Web Components",
      subtitle: "React from plain English, copy-paste ready, responsive",
      description:
        "Transform natural language into production-ready React components. Every component is responsive, accessible, and follows best practices.",
      icon: Code,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Content Creation",
      subtitle: "Guided wizard, SEO-optimized, brand consistency",
      description:
        "Step-by-step content creation that maintains your brand voice and optimizes for search engines automatically.",
      icon: Wand2,
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Smart Workflow",
      subtitle: "AI suggestions, auto-filled prompts, context preservation",
      description:
        "Intelligent routing that suggests the perfect tool for your task and maintains context across your entire project.",
      icon: Route,
      color: "from-purple-700 to-purple-900",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Everything you need to build faster</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful features working together to transform your workflow
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-medium mb-2">{feature.title}</h3>
                <p className="text-purple-400 mb-4">{feature.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex-1">
                <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-2xl">
                  <div className="bg-background rounded-lg p-4 font-mono text-sm">
                    <div className="text-purple-400 mb-2">
                      {">"} {feature.title.toLowerCase()} example
                    </div>
                    <div className="text-muted-foreground">✨ Processing...</div>
                    <div className="text-purple-400">✅ Ready in seconds</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
