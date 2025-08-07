"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is KorbinAI and how does it work?",
      answer:
        "KorbinAI is an advanced AI copilot designed to be your strategic partner for brainstorming, coding, research, content creation, and strategic planning. It works by understanding your natural language prompts and leveraging specialized AI models to generate highly relevant, context-aware, and production-ready outputs, from React components to SEO-optimized articles.",
    },
    {
      question: "What kind of code can KorbinAI generate?",
      answer:
        "KorbinAI specializes in generating production-ready React components from plain English descriptions. This includes UI elements, complex sections, and even full page layouts. We focus on clean, responsive, and accessible code following modern best practices. Support for other frameworks like Vue and Svelte is planned.",
    },
    {
      question: "How does KorbinAI help with content creation?",
      answer:
        "Our Guided Content Creation tool provides a step-by-step wizard to help you produce high-quality, SEO-optimized content. It ensures brand consistency, adapts to your desired tone, and can generate blog posts, emails, social media updates, and more, saving you significant time and effort.",
    },
    {
      question: "What are the 'specialized tools' and how do they differ from the main Copilot?",
      answer:
        "Beyond the core AI Copilot, KorbinAI offers four specialized tools: Korbin for Creators (content & community), Korbin for Prompters (AI prompt engineering), Korbin for Artists (creative & visual design), and Korbin for Analysts (data & strategic analysis). While the Copilot provides overarching strategic guidance, these tools offer deep, tailored functionalities for specific creative and technical workflows, all integrated into one platform.",
    },
    {
      question: "Is KorbinAI suitable for beginners or experienced professionals?",
      answer:
        "KorbinAI is designed for everyone! Beginners can easily generate complex outputs without prior coding or design experience, thanks to our intuitive interface and guided workflows. Experienced professionals will find it an invaluable accelerator, helping them brainstorm, prototype, and produce high-quality work much faster, focusing on strategy rather than repetitive tasks.",
    },
    {
      question: "How does KorbinAI ensure the quality and relevance of its outputs?",
      answer:
        "KorbinAI is built on advanced AI frameworks that prioritize contextual understanding and strategic thinking. Unlike generic AI, it's trained to grasp the nuances of your requests and project goals. We continuously refine our models based on user feedback and industry best practices to ensure outputs are not only high-quality but also highly relevant and actionable.",
    },
    {
      question: "What is your data privacy policy?",
      answer:
        "We are committed to protecting your privacy. We collect only the necessary information to provide and improve our service. Your inputs and generated content are used to enhance our AI models, primarily in aggregated and anonymized forms where possible. We do not sell your personal information. Please refer to our full Privacy Policy for more details.",
    },
    {
      question: "What if the AI output isn't exactly what I expected?",
      answer:
        "While our AI strives for precision, sometimes outputs may require minor adjustments. You can refine your prompts, provide more specific instructions, or iterate on the generated content. Our tools are designed to be iterative, allowing you to guide the AI towards your desired outcome. We also welcome feedback to continuously improve our models.",
    },
    {
      question: "Do I need coding experience to use the code generation features?",
      answer:
        "No, you do not! Our code generation feature is designed for users of all technical backgrounds. You simply describe the component you need in plain English, and KorbinAI will generate the production-ready React code for you. You can then copy-paste it directly into your project.",
    },
    {
      question: "How is KorbinAI different from other AI assistants like ChatGPT or Claude?",
      answer:
        "KorbinAI is purpose-built for strategic thinking and production-ready output, going beyond generic conversational AI. While tools like ChatGPT are excellent for broad queries, KorbinAI offers deep contextual understanding, specialized tools for specific creative and technical workflows (e.g., code, content, prompts, data), and a focus on actionable, high-quality results that integrate seamlessly into your projects. Our AI is trained to be a partner in your workflow, not just a chatbot.",
    },
    {
      question: "What are your future plans for KorbinAI?",
      answer:
        "We are continuously evolving KorbinAI! Our roadmap includes expanding support for more coding frameworks (Vue, Svelte, Angular), introducing new specialized tools, enhancing AI capabilities for even deeper strategic insights, and integrating with more third-party platforms to streamline your workflow further. Stay tuned for updates!",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground font-light">Everything you need to know about KorbinAI</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/ItemList"> {/* Added this wrapper */}
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
                    className="text-left hover:text-purple-400 transition-colors font-medium"
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
          </div> {/* Closing div for mainEntity */}
        </motion.div>
      </div>
    </section>
  )
}
