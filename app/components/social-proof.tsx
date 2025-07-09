"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Startup Founder",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "BrieflyAI helped me build my entire landing page in an afternoon. The components are production-ready and beautiful.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      title: "Freelance Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "I'm delivering projects 10x faster to my clients. The code quality is impressive and saves me hours of work.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      title: "Content Creator",
      avatar: "/placeholder.svg?height=60&width=60",
      content: "Finally, an AI tool that understands what I need. The guided content creation is a game-changer.",
      rating: 5,
    },
    {
      name: "David Kim",
      title: "Agency Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      content: "Our team productivity has skyrocketed. We're scaling output without hiring more developers.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 50+ creators and developers</h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-slate-300">4.9/5 from early users</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.title}</p>
                    </div>
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
