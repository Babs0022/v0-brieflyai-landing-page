"use client"

import { motion } from "framer-motion"
import { Zap, Users, Sparkles, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function UseCases() {
  const cases = [
    {
      title: "Startup Founder",
      subtitle: "Build MVP landing page in an afternoon",
      description: "Launch faster with professional components that convert visitors into customers.",
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Freelancer",
      subtitle: "10x your client delivery speed",
      description: "Deliver more projects in less time while maintaining high quality standards.",
      icon: Users,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Agency",
      subtitle: "Scale team output without hiring",
      description: "Increase capacity and take on more clients without expanding your team.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Developer",
      subtitle: "Focus on logic, let AI handle UI",
      description: "Spend time on complex problems while AI handles the repetitive UI work.",
      icon: Code,
      color: "from-pink-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for every creator</h2>
          <p className="text-xl text-slate-300">See how BrieflyAI transforms workflows across different roles</p>
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
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-xl text-cyan-400 mb-4">{useCase.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
