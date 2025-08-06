"use client"

import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { useState } from "react" // Import useState for Header component props

export default function TermsPage() {
// Dummy state for Header component, as it's a client component
const [isMenuOpen, setIsMenuOpen] = useState(false)

return (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <main className="container mx-auto px-4 py-20 pt-32">
      <div className="bg-background rounded-lg max-w-4xl mx-auto border border-border p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-center">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">Last Updated: June 12, 2025</p>

          <p className="mb-4">
            Welcome to KorbinAI. These Terms of Service ("Terms") govern your access to and use of the KorbinAI
            website, applications, and services (collectively, the "Service"). Please read these Terms carefully. By
            accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h3 className="text-xl font-normal mb-3">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By creating an account, using the Service, or clicking "I Agree," you acknowledge that you have read,
            understood, and agree to be bound by these Terms. If you are using the Service on behalf of an
            organization, you are agreeing to these Terms for that organization and promising that you have the
            authority to bind that organization to these terms.
          </p>

          <h3 className="text-xl font-normal mb-3">2. The Service</h3>
          <p className="mb-4">
            KorbinAI provides a suite of artificial intelligence tools to assist in the creation of applications,
            written content, images, structured data, and AI prompts ("Generated Content"). The Service is provided on
            an "as-is" and "as-available" basis. We may modify, suspend, or discontinue the Service at any time
            without notice.
          </p>

          <h3 className="text-xl font-normal mb-3">3. User Accounts & Security</h3>
          <p className="mb-4">
            You must register for an account to access most features of the Service. You agree to provide accurate,
            current, and complete information during registration and to update such information to keep it accurate.
            You are responsible for safeguarding your password and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-normal mb-3">4. Content and Ownership</h3>
          <h4 className="text-lg font-normal mb-2">a. Your Content</h4>
          <p className="mb-3">
            You retain all ownership rights to the text, images, data, or other materials you provide to the Service
            ("Input"). By providing Input to the Service, you grant KorbinAI a worldwide, non-exclusive,
            royalty-free, sublicensable, and transferable license to use, reproduce, modify, distribute, and prepare
            derivative works of your Input solely for the purpose of providing, operating, and improving the Service.
          </p>

          <h4 className="text-lg font-normal mb-2">b. Generated Content</h4>
          <p className="mb-3">
            To the extent permitted by applicable law, and subject to your compliance with these Terms, you own the
            Generated Content created by the Service from your Input. However, due to the nature of machine learning,
            output may not be unique across users, and the Service may generate the same or similar output for other
            users.
          </p>

          <h3 className="text-xl font-normal mb-3">5. Prohibited Conduct</h3>
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

          <h3 className="text-xl font-normal mb-3">6. Fees and Payment</h3>
          <p className="mb-4">
            Certain features of the Service may require payment. We use third-party payment processors (e.g.,
            Paystack, NOWPayments) to handle transactions. All fees are non-refundable except as required by law or as
            explicitly stated in our pricing plans.
          </p>

          <h3 className="text-xl font-normal mb-3">7. Disclaimers and Limitation of Liability</h3>
          <p className="mb-4">
            THE SERVICE AND GENERATED CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL
            WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-normal mb-3">8. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
