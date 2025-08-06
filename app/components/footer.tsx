"use client"

import { useState } from "react"
import { Twitter, Mail } from 'lucide-react'
import Link from "next/link"

export function Footer() {
const [showPrivacy, setShowPrivacy] = useState(false)
const [showTerms, setShowTerms] = useState(false)

return (
  <>
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="KorbinAI Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-semibold tracking-tight">
                Korbin<span className="text-purple-400">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 font-light">The AI copilot for creators and developers.</p>
            <div className="flex space-x-4">
              <a
                href="mailto:team@korbinai.com"
                className="text-muted-foreground hover:text-purple-400 transition-colors"
                aria-label="Email KorbinAI"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/korbinai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-400 transition-colors"
                aria-label="KorbinAI Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 tracking-tight">Product</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#features" className="block hover:text-purple-400 transition-colors font-light">
                Features
              </a>
              <a href="#solutions" className="block hover:text-purple-400 transition-colors font-light">
                Solutions
              </a>
              <Link href="/pricing" className="block hover:text-purple-400 transition-colors font-light">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 tracking-tight">Company</h4>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="mailto:team@korbinai.com"
                className="block hover:text-purple-400 transition-colors font-light"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 tracking-tight">Legal</h4>
            <div className="space-y-2 text-muted-foreground">
              <Link href="/privacy" className="block hover:text-purple-400 transition-colors font-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-purple-400 transition-colors font-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p className="font-light">&copy; 2025 KorbinAI. All rights reserved.</p>
          <p className="mt-2 text-sm font-light">
            Questions? Contact us at{" "}
            <a href="mailto:team@korbinai.com" className="text-purple-400 hover:text-purple-300">
              team@korbinai.com
            </a>
          </p>
        </div>
      </div>
    </footer>

    {/* Privacy Policy Modal - Removed as it's now a dedicated page */}
    {showPrivacy && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto border border-border">
          <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            <button onClick={() => setShowPrivacy(false)} className="text-muted-foreground hover:text-foreground">
              {/* Removed X icon */}
            </button>
          </div>
          <div className="p-6 prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: June 12, 2025</p>

            <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
            <p className="mb-4">
              KorbinAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our Service. By using the
              Service, you consent to the data practices described in this policy.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <strong>Personal Information:</strong> When you register for an account, we collect information such
                as your name, email address, and password.
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

            <h3 className="text-xl font-semibold mb-3">3. How We Use Your Information</h3>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
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

            <h3 className="text-xl font-semibold mb-3">4. How We Share and Disclose Information</h3>
            <p className="mb-2">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
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
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">5. Data Security and Retention</h3>
            <p className="mb-4">
              We implement industry-standard security measures to protect your information from unauthorized access,
              alteration, disclosure, or destruction. However, no internet-based service is 100% secure. We retain
              your information for as long as your account is active or as needed to provide you with the Service.
            </p>

            <h3 className="text-xl font-semibold mb-3">6. Your Data Protection Rights</h3>
            <p className="mb-2">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification if that information is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your personal information.</li>
              <li>The right to request that we restrict the processing of your personal information.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:team@korbinai.com" className="text-purple-400 hover:text-purple-300">
                team@korbinai.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Terms of Service Modal - Removed as it's now a dedicated page */}
    {showTerms && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto border border-border">
          <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            <button onClick={() => setShowTerms(false)} className="text-muted-foreground hover:text-foreground">
              {/* Removed X icon */}
            </button>
          </div>
          <div className="p-6 prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: June 12, 2025</p>

            <p className="mb-4">
              Welcome to KorbinAI. These Terms of Service ("Terms") govern your access to and use of the KorbinAI
              website, applications, and services (collectively, the "Service"). Please read these Terms carefully. By
              accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
            <p className="mb-4">
              By creating an account, using the Service, or clicking "I Agree," you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you are using the Service on behalf of an
              organization, you are agreeing to these Terms for that organization and promising that you have the
              authority to bind that organization to these terms.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. The Service</h3>
            <p className="mb-4">
              KorbinAI provides a suite of artificial intelligence tools to assist in the creation of applications,
              written content, images, structured data, and AI prompts ("Generated Content"). The Service is provided
              on an "as-is" and "as-available" basis. We may modify, suspend, or discontinue the Service at any time
              without notice.
            </p>

            <h3 className="text-xl font-semibold mb-3">3. User Accounts & Security</h3>
            <p className="mb-4">
              You must register for an account to access most features of the Service. You agree to provide accurate,
              current, and complete information during registration and to update such information to keep it
              accurate. You are responsible for safeguarding your password and for all activities that occur under
              your account.
            </p>

            <h3 className="text-xl font-semibold mb-3">4. Content and Ownership</h3>
            <h4 className="text-lg font-semibold mb-2">a. Your Content</h4>
            <p className="mb-3">
              You retain all ownership rights to the text, images, data, or other materials you provide to the Service
              ("Input"). By providing Input to the Service, you grant KorbinAI a worldwide, non-exclusive,
              royalty-free, sublicensable, and transferable license to use, reproduce, modify, distribute, and prepare
              derivative works of your Input solely for the purpose of providing, operating, and improving the
              Service.
            </p>

            <h4 className="text-lg font-semibold mb-2">b. Generated Content</h4>
            <p className="mb-3">
              To the extent permitted by applicable law, and subject to your compliance with these Terms, you own the
              Generated Content created by the Service from your Input. However, due to the nature of machine
              learning, output may not be unique across users, and the Service may generate the same or similar output
              for other users.
            </p>

            <h3 className="text-xl font-semibold mb-3">5. Prohibited Conduct</h3>
            <p className="mb-2">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Engage in any illegal, fraudulent, or abusive activities.</li>
              <li>Generate content that is defamatory, obscene, pornographic, vulgar, or offensive.</li>
              <li>
                Promote discrimination, bigotry, racism, hatred, harassment, or harm against any individual or group.
              </li>
              <li>Violate the intellectual property rights or any other rights of any third party.</li>
              <li>Attempt to reverse-engineer, decompile, or discover the source code of the Service.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6. Fees and Payment</h3>
            <p className="mb-4">
              Certain features of the Service may require payment. We use third-party payment processors (e.g.,
              Paystack, NOWPayments) to handle transactions. All fees are non-refundable except as required by law or
              as explicitly stated in our pricing plans.
            </p>

            <h3 className="text-xl font-semibold mb-3">7. Disclaimers and Limitation of Liability</h3>
            <p className="mb-4">
              THE SERVICE AND GENERATED CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL
              WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold mb-3">8. Contact Information</h3>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:team@korbinai.com" className="text-purple-400 hover:text-purple-300">
                team@korbinai.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    )}
  </>
)
}
