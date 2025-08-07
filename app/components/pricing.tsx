"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { trackEvent, trackConversion } from "@/components/analytics"
import { useState } from "react" // Re-import useState
import { PricingFAQ } from "./pricing-faq"
import { PricingComparisonTable } from "./pricing-comparison-table"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false) // Re-add isAnnual state

  const getDisplayedPrice = (monthlyPrice: number) => {
    return isAnnual ? (monthlyPrice * 12 * 0.9).toFixed(0) : monthlyPrice.toFixed(0)
  }

  const pricingTiers = [
    {
      name: "Korbin AI Free",
      monthlyPrice: 0,
      description: "Perfect for individuals getting started with AI-powered creation.",
      features: [
        "Limited access to Copilot (powered by Gemini 2.5 Pro)",
        "100 Monthly Credits (across specialized tools)",
        "Store up to 10 deleted conversations",
        "Community Support",
      ],
      buttonText: "Start for Free",
      href: "https://app.korbinai.com/signup",
      isHighlighted: false,
    },
    {
      name: "Korbin AI Pro",
      monthlyPrice: 20,
      description: "For power users and professionals needing advanced capabilities.",
      features: [
        "Unlimited access to Copilot (powered by Gemini 2.5 Pro)",
        "1500 Monthly Credits (across specialized tools)",
        "Store more deleted conversations",
        "Copilot Personalizer",
        "Priority email support",
      ],
      buttonText: "Get Pro",
      href: "https://app.korbinai.com/signup",
      isHighlighted: true,
    },
    {
      name: "Korbin AI Unlimited",
      monthlyPrice: 75,
      description: "Ideal for small businesses and agencies requiring extensive usage.",
      features: [
        "Everything in Pro (Copilot)",
        "Unlimited Monthly Credits (across specialized tools)",
        "Store Unlimited deleted conversations",
        "Copilot Personalizer",
        "Early Access to new features",
        "Custom Integrations (upon request)",
        "Priority email support",
      ],
      buttonText: "Get Unlimited",
      href: "https://app.korbinai.com/signup",
      isHighlighted: false,
    },
  ]

  const handleCTAClick = (planName: string, price: string) => {
    trackEvent("pricing_cta_click", {
      event_category: "conversion",
      event_label: `signup_${planName.toLowerCase()}_plan_${isAnnual ? "annual" : "monthly"}`,
      page_location: "pricing_section",
      value: Number.parseFloat(price.replace("$", "")),
      currency: "USD",
    })
    trackConversion("plan_signup", {
      plan_name: planName,
      value: Number.parseFloat(price.replace("$", "")),
      currency: "USD",
    })
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Choose the plan that best fits your creative and development needs. No hidden fees, no long-term contracts.
          </p>

          {/* Beta Phase Banner */}
          <div className="bg-purple-500/20 border border-purple-500/30 text-purple-400 px-6 py-3 rounded-lg mb-8 max-w-xl mx-auto font-medium">
            🎉 All services are currently FREE during our Beta Phase! 🎉
          </div>

          {/* Monthly/Annual Toggle */}
          <div className="flex justify-center items-center space-x-4 mt-8 mb-12">
            <Button
              variant={!isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-base font-medium ${
                !isAnnual
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-secondary/50 border-border text-foreground hover:bg-secondary"
              }`}
            >
              Monthly Billing
            </Button>
            <Button
              variant={isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-base font-medium relative ${
                isAnnual
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "bg-secondary/50 border-border text-foreground hover:bg-secondary"
              }`}
            >
              Annual Billing
              <span className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full rotate-6 shadow-md">
                10% OFF!
              </span>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className={`bg-secondary/50 backdrop-blur-sm border ${
                  tier.isHighlighted ? "border-purple-500/70 border-2 shadow-2xl" : "border-border"
                } hover:border-purple-600 transition-all duration-300 h-full flex flex-col`}
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  {tier.isHighlighted && (
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block self-center">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight">{tier.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light flex-grow">{tier.description}</p>
                  <div className="mb-8">
                    <div className="text-5xl font-bold mb-2 flex items-baseline justify-center">
                      {tier.monthlyPrice > 0 && (
                        <span className="line-through text-muted-foreground mr-2 text-3xl md:text-4xl font-bold">
                          ${getDisplayedPrice(tier.monthlyPrice)}
                        </span>
                      )}
                      <span className="text-purple-400">$0</span>
                      <span className="text-lg text-muted-foreground">
                        {tier.monthlyPrice === 0 ? "/month" : isAnnual ? "/year (Beta)" : "/month (Beta)"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-base font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full mt-auto text-lg py-4 h-14 font-medium ${
                      tier.isHighlighted
                        ? "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    <a
                      href={`${tier.href}${isAnnual ? "&billing=annual" : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCTAClick(tier.name, "0")}
                    >
                      {tier.buttonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <PricingComparisonTable />
      <PricingFAQ />
    </section>
  )
}
