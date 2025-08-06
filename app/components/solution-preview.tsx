"use client"

import { motion } from "framer-motion"
import { Wand2, Route, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function SolutionPreview() {
  const features = [
    {
      icon: Wand2,
      title: "Smart Component Generator",
      description: "Say 'build a pricing section' → Get React code in 2 minutes",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Route,
      title: "Guided Content Creation",
      description: "Step-by-step wizard for professional content every time",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: Zap,
      title: "Intelligent Tool Routing",
      description: "One prompt, perfect tool suggestion, auto-filled context",
      color: "from-purple-700 to-purple-900",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-4">
            The AI copilot that actually <span className="text-purple-400">gets it</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Three powerful features that transform how you build and create
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading startups and agencies worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-secondary/50 backdrop-blur-sm border-border hover:border-purple-600 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
