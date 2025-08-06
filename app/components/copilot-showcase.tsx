"use client"

import { motion } from "framer-motion"
import { Brain, Lightbulb, Code, Search, FileText, BarChart3 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function CopilotShowcase() {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Strategic Brainstorming",
      description: "Doesn't just generate ideas—helps you evaluate, refine, and prioritize them based on your goals",
      example: "Turn 'I want to start a business' into a complete market analysis with actionable next steps",
    },
    {
      icon: Code,
      title: "Intelligent Development",
      description:
        "Understands your entire project context and suggests architectural decisions, not just code snippets",
      example: "Analyzes your codebase and recommends the best patterns for scalability and maintainability",
    },
    {
      icon: Search,
      title: "Contextual Research",
      description: "Synthesizes information from multiple sources and connects dots you might have missed",
      example: "Researches your competitors and identifies unique positioning opportunities for your product",
    },
    {
      icon: FileText,
      title: "Strategic Content Creation",
      description: "Creates content that aligns with your brand voice and business objectives, not generic templates",
      example: "Develops a content strategy that drives your specific business goals and audience engagement",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Planning",
      description: "Helps you create actionable plans with measurable outcomes and clear success metrics",
      example: "Builds a 90-day launch plan with specific milestones, metrics, and contingency strategies",
    },
    {
      icon: Brain,
      title: "Predictive Guidance",
      description: "Anticipates your needs and suggests next steps before you even realize you need them",
      example: "Identifies potential roadblocks in your project and proactively suggests solutions",
    },
  ]

  return (
    <section id="copilot" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Meet your new <span className="text-purple-400">strategic partner</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed font-light">
            Built on advanced AI frameworks that enable true understanding and strategic thinking
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            It's not just about what you ask—it's about what you need to succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-secondary/50 backdrop-blur-sm border-border hover:border-purple-600 transition-all duration-300 h-full">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">{capability.description}</p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-sm text-purple-400 font-medium mb-2">Example:</p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{capability.example}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
