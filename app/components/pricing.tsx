"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { trackEvent, trackConversion } from "@/components/analytics"
import { useState } from "react"
import { PricingFAQ } from "./pricing-faq"
import { PricingComparisonTable } from "./pricing-comparison-table"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const getDisplayedPrice = (monthlyPrice: number) => {
    return isAnnual ? (monthlyPrice * 12 * 0.9).toFixed(0) : monthlyPrice.toFixed(0)
  }

  const pricingTiers = [
    {
      name: "Free",
      monthlyPrice: 0,
      description: "Perfect for individuals getting started with AI-powered creation.",
      features: [
        "Access to AI Copilot (limited usage)",
        "Basic content generation",
        "Standard prompt optimization",
        "Community support",
      ],
      buttonText: "Start for Free",
      href: "https://dash.brieflyai.xyz/signup",
      isHighlighted: false,
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      description: "For power users and professionals needing advanced capabilities.",
      features: [
        "Unlimited AI Copilot usage",
        "Advanced content generation",
        "Priority prompt optimization",
        "Access to all 4 specialized tools",
        "Priority email support",
        "Commercial license",
      ],
      buttonText: "Get Pro",
      href: "https://dash.brieflyai.xyz/signup?plan=pro",
      isHighlighted: true,
    },
    {
      name: "Business",
      monthlyPrice: 99,
      description: "Ideal for small businesses and agencies requiring extensive usage.",
      features: [
        "Everything in Pro",
        "Higher usage limits for all tools",
        "Dedicated account manager",
        "Early access to new features",
        "Custom integrations (upon request)",
        "Enhanced security features",
      ],
      buttonText: "Get Business",
      href: "https://dash.brieflyai.xyz/signup?plan=business",
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

          <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-lg mb-8 max-w-xl mx-auto font-medium">
            🎉 All services are currently FREE during our Beta Phase! 🎉
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8 mb-12">
            <Button
              variant={!isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-base font-medium ${
                !isAnnual
                  ? "bg-green-500 hover:bg-green-600 text-white"
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
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-secondary/50 border-border text-foreground hover:bg-secondary"
              }`}
            >
              Annual Billing
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full rotate-6 shadow-md">
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
                  tier.isHighlighted ? "border-green-500/70 border-2 shadow-2xl" : "border-border"
                } hover:border-green-600 transition-all duration-300 h-full flex flex-col`}
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  {tier.isHighlighted && (
                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block self-center">
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
                      <span className="text-green-400">$0</span>
                      <span className="text-lg text-muted-foreground">
                        {tier.monthlyPrice === 0 ? "/month" : isAnnual ? "/year (Beta)" : "/month (Beta)"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-base font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full mt-auto text-lg py-4 h-14 font-medium ${
                      tier.isHighlighted
                        ? "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
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
