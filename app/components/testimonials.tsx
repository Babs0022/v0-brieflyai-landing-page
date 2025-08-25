"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            What our users are saying
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Hear directly from the creators and innovators who are building faster with KorbinAI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white border border-gray-200/50 rounded-2xl p-6 modern-shadow-lg hover-lift"
        >
          <Image
            src="/testimonials/alex-feedback.jpeg"
            alt="Screenshot of user Alex's positive feedback about KorbinAI's image generation, stating it's 'amazing' and 'even better than Grok in generating images'."
            width={700}
            height={1000}
            layout="responsive"
            className="rounded-lg"
          />
          <p className="mt-6 text-gray-500 text-sm font-normal">
            Feedback from Alex, a KorbinAI user, praising the platform's image generation capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
