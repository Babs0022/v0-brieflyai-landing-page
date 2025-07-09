"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function DemoVideo() {
  return (
    <section id="demo" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See BrieflyAI in Action</h2>
          <p className="text-xl text-slate-300">Watch a complete landing page component get built in real-time</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <p className="text-slate-300">Click to watch the demo</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
          <p className="text-slate-400 mt-4">Complete landing page component built in under 2 minutes</p>
        </motion.div>
      </div>
    </section>
  )
}
