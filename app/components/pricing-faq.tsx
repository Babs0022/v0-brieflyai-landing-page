"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQ() {
  const faqs = [
    {
      question: "What is the difference between monthly and annual billing?",
      answer:
        "Monthly billing allows you to pay on a month-to-month basis, offering flexibility. Annual billing provides a 10% discount on the total price, making it more cost-effective for long-term users. Both plans offer the same features within their respective tiers.",
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
      question: "Is there a free trial for paid plans?",
      answer:
        "Our Free plan offers a great way to get started with limited usage. Paid plans do not have a separate free trial, but you can upgrade at any time. We offer a 30-day money-back guarantee if you're not satisfied with a paid plan.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all new paid subscriptions. If you are not satisfied within the first 30 days, you can request a full refund. After 30 days, refunds are not typically provided, but you can cancel your subscription at any time to prevent future charges.",
    },
    {
      question: "Do you offer custom plans for enterprises?",
      answer:
        "While our Business plan covers extensive usage, for very large organizations with unique requirements, please contact us directly at Elijah@brieflyai.xyz to discuss custom solutions.",
    },
  ]

  return (
    <section className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground font-light">Everything you need to know about our pricing</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
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
                  className="text-left hover:text-green-400 transition-colors font-medium"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground leading-relaxed font-light"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
