"use client"

import { motion } from "framer-motion"
import { Code, Wand2, Route } from "lucide-react"

export function FeatureDeepDive() {
  const features = [
    {
      title: "Web Components",
      subtitle: "React from plain English, copy-paste ready, responsive",
      description:
        "Transform natural language into production-ready React components. Every component is responsive, accessible, and follows best practices.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Content Creation",
      subtitle: "Guided wizard, SEO-optimized, brand consistency",
      description:
        "Step-by-step content creation that maintains your brand voice and optimizes for search engines automatically.",
      icon: Wand2,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Smart Workflow",
      subtitle: "AI suggestions, auto-filled prompts, context preservation",
      description:
        "Intelligent routing that suggests the perfect tool for your task and maintains context across your entire project.",
      icon: Route,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to build faster</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
                <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                <p className="text-xl text-cyan-400 mb-4">{feature.subtitle}</p>
                <p className="text-lg text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex-1">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl">
                  <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                    <div className="text-cyan-400 mb-2">
                      {">"} {feature.title.toLowerCase()} example
                    </div>
                    <div className="text-slate-400">✨ Processing...</div>
                    <div className="text-green-400">✅ Ready in seconds</div>
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
