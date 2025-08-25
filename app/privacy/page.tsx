"use client"

import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { useState } from "react" // Import useState for Header component props

export default function PrivacyPage() {
  // Dummy state for Header component, as it's a client component
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto px-4 py-20 pt-32">
        <div className="bg-background rounded-lg max-w-4xl mx-auto border border-border p-6 md:p-8 lg:p-10">
          <h1 className="text-2xl md:text-3xl font-medium mb-6 text-center">Privacy Policy</h1>
          <div className="prose prose-gray prose-sm md:prose-base max-w-none leading-relaxed">
            <p className="text-muted-foreground mb-6 text-sm">Last Updated: June 12, 2025</p>

            <h3 className="text-lg md:text-xl font-medium mb-4">1. Introduction</h3>
            <p className="mb-6 text-sm md:text-base leading-relaxed">
              KorbinAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our Service. By using the Service,
              you consent to the data practices described in this policy.
            </p>

            <h3 className="text-lg md:text-xl font-medium mb-4">2. Information We Collect</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-sm md:text-base leading-relaxed">
              <li>
                <strong>Personal Information:</strong> When you register for an account, we collect information such as
                your name, email address, and password.
              </li>
              <li>
                <strong>Payment Information:</strong> We use third-party payment processors (e.g., Paystack,
                NOWPayments) to handle payments. We do not store your full credit card or financial account information
                on our servers.
              </li>
              <li>
                <strong>Content Data:</strong> We collect the Inputs you provide to the Service (e.g., prompts, text,
                images, data descriptions) and the Generated Content. This is necessary to provide and improve the
                Service.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect information about your interactions with the
                Service, such as your IP address, browser type, operating system, and the pages or features you
                accessed.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking technologies to operate and personalize
                the Service.
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-medium mb-4">3. How We Use Your Information</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-sm md:text-base leading-relaxed">
              <li>Provide, operate, maintain, and improve the Service.</li>
              <li>Process your transactions and manage your subscriptions.</li>
              <li>Communicate with you, including sending service-related notices and promotional materials.</li>
              <li>Monitor and analyze usage and trends to improve user experience.</li>
              <li>Personalize the Service and provide content or features that match your interests.</li>
              <li>
                For research and development to train and enhance our AI models, but only in an aggregated and
                anonymized form where possible.
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-medium mb-4">4. How We Share and Disclose Information</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-sm md:text-base leading-relaxed">
              <li>
                <strong>With Service Providers:</strong> We share information with third-party vendors and service
                providers that perform services on our behalf, such as AI model providers (e.g., Google AI), cloud
                hosting, payment processing, and analytics.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in
                the good faith belief that such action is necessary to comply with a legal obligation.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion
                of our assets, your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-medium mb-4">5. Data Security and Retention</h3>
            <p className="mb-6 text-sm md:text-base leading-relaxed">
              We implement industry-standard security measures to protect your information from unauthorized access,
              alteration, disclosure, or destruction. However, no internet-based service is 100% secure. We retain your
              information for as long as your account is active or as needed to provide you with the Service.
            </p>

            <h3 className="text-lg md:text-xl font-medium mb-4">6. Your Data Protection Rights</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-sm md:text-base leading-relaxed">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification if that information is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your personal information.</li>
              <li>The right to request that we restrict the processing of your personal information.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-medium mb-4">7. Contact Us</h3>
            <p className="text-sm md:text-base leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:team@korbinai.com" className="text-purple-400 hover:text-purple-300">
                team@korbinai.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
