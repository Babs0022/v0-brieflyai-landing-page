"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do I need coding experience?",
      answer:
        "Not at all! BrieflyAI is designed for creators of all skill levels. Simply describe what you want in plain English, and we'll generate the code for you.",
    },
    {
      question: "What frameworks are supported?",
      answer:
        "We currently support React with Next.js, with plans to add Vue, Svelte, and Angular support in the coming months.",
    },
    {
      question: "Can I use this for client work?",
      answer:
        "Yes! All plans include a commercial license, so you can use BrieflyAI-generated components and content for client projects without any restrictions.",
    },
    {
      question: "How is this different from ChatGPT?",
      answer:
        "BrieflyAI is specifically trained for component generation and content creation. We provide guided workflows, context preservation, and production-ready outputs that ChatGPT can't match.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied with BrieflyAI, we'll refund your payment, no questions asked.",
    },
  ]

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-300">Everything you need to know about BrieflyAI</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-cyan-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
