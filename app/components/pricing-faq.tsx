"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQ() {
  const faqs = [
    {
      question: "What is the difference between monthly and annual billing?",
      answer:
        "Our pricing is straightforward monthly billing, offering flexibility. All plans offer the same features within their respective tiers.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes will be prorated and applied to your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover). All payments are securely processed by our third-party payment partners.",
    },
    {
      question: "What are 'Copilot Personalizer' and 'Unlock Trash'?",
      answer:
        "The Copilot Personalizer allows you to customize your AI copilot's behavior and responses to better suit your workflow and preferences. 'Unlock Trash' provides enhanced storage for deleted conversations, allowing you to retrieve them if needed. Both features are included in the Pro and Unlimited plans.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer:
        "Our Free plan offers a great way to get started with limited usage. Paid plans do not have a separate free trial, but you can upgrade at any time. We offer a 30-day money-back guarantee if you're not satisfied with a paid plan.",
    },
    {
      question: "Do you offer custom plans for enterprises?",
      answer:
        "For very large organizations with unique requirements, please contact us directly at team@korbinai.com to discuss custom solutions.",
    },
  ]

  return (
    <section className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground font-light">Everything you need to know about KorbinAI</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/ItemList">
            {" "}
            {/* Added this wrapper */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-secondary/50 backdrop-blur-sm border border-border rounded-lg px-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger
                    className="text-left hover:text-purple-400 transition-colors font-medium text-base"
                    itemProp="name"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-muted-foreground leading-relaxed font-light text-sm"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>{" "}
          {/* Closing div for mainEntity */}
        </motion.div>
      </div>
    </section>
  )
}
