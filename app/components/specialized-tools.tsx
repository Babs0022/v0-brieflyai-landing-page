"use client"

import { motion } from "framer-motion"
import { FileEdit, Terminal, ImageIcon, Code } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function SpecializedTools() {
  const tools = [
    {
      icon: FileEdit,
      title: "Korbin for Creators",
      subtitle: "Content & Community Building",
      description:
        "Generate high-quality blog posts, emails, social media updates, and more from a simple description. It adapts to your brand voice and desired tone.",
      enhancement:
        "Streamlines content pipelines, ensures brand voice consistency, and frees up creators to focus on strategy and distribution rather than drafting.",
      complement:
        "While the Copilot helps strategize entire content calendars and define target audiences, this tool takes those strategic inputs and rapidly generates the actual content, ensuring alignment with the overarching plan.",
      benefits:
        "Empowers individuals and small teams to produce professional-grade content without needing extensive copywriting skills or large marketing departments.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Terminal,
      title: "Korbin for Prompters",
      subtitle: "AI Prompt Engineering",
      description:
        "Need to use another AI? Craft detailed, optimized prompts for any model or task to get the best results. It helps you articulate your needs precisely.",
      enhancement:
        "Reduces trial-and-error in AI interactions, significantly improves output quality, and saves time for users working with various AI systems.",
      complement:
        "The Copilot can help users define complex problems or creative visions. This tool then translates these high-level ideas into highly effective, model-specific prompts, acting as a bridge between human intent and AI execution.",
      benefits:
        "Makes advanced prompt engineering accessible to non-experts, allowing anyone to get professional-level results from AI, regardless of their technical understanding of AI models.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: ImageIcon,
      title: "Korbin for Artists",
      subtitle: "Creative & Visual Design",
      description:
        "Create unique, stunning images and art from a text description. You can even provide your own images for context to guide the AI.",
      enhancement:
        "Accelerates creative ideation, provides a powerful tool for visual asset generation, and enables artists to explore new styles and concepts rapidly.",
      complement:
        "The Copilot can assist artists in brainstorming concepts, developing narratives for visual projects, or even managing project timelines. This tool then serves as the direct creative engine, bringing those concepts to life visually.",
      benefits:
        "Lowers the barrier to entry for visual creation, allowing individuals without traditional art skills to generate high-quality visuals for personal projects, marketing, or digital art.",
      color: "from-purple-700 to-purple-900",
    },
    {
      icon: Code,
      title: "Korbin for Analysts",
      subtitle: "Data & Strategic Analysis",
      description:
        "Generate structured data like JSON or CSV from a plain-English description, perfect for populating components or preparing data for analysis.",
      enhancement:
        "Simplifies data preparation, reduces manual data entry errors, and accelerates development workflows by providing ready-to-use data structures.",
      complement:
        "The Copilot can help analysts define data requirements, design database structures, or interpret complex datasets. This tool then automates the creation of the actual structured data, ensuring it adheres to the specified format and content.",
      benefits:
        "Empowers non-technical users to generate complex data structures, making data-driven development and analysis more accessible without requiring deep programming knowledge.",
      color: "from-purple-800 to-purple-950",
    },
  ]

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plus four specialized tools for <span className="text-purple-400">every creator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Beyond the main copilot, we've built dedicated tools for specific creative workflows—all in one platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-secondary/50 backdrop-blur-sm border-border hover:border-purple-600 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-purple-400 mb-4 font-medium">{tool.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">{tool.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground mb-3">How it enhances your workflow:</p>
                    <p className="text-sm text-muted-foreground mb-3 font-light">{tool.enhancement}</p>
                    <p className="text-sm font-medium text-foreground mb-3">Complements the Copilot by:</p>
                    <p className="text-sm text-muted-foreground mb-3 font-light">{tool.complement}</p>
                    <p className="text-sm font-medium text-foreground mb-3">Unique Benefits & Democratization:</p>
                    <p className="text-sm text-muted-foreground font-light">{tool.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-secondary to-background rounded-2xl border border-border p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">All tools work seamlessly together</h3>
            <p className="text-muted-foreground font-light">
              Switch between the main copilot and specialized tools without losing context. Your work flows naturally
              across all features in one unified experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
