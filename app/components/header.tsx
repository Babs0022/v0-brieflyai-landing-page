"use client"

import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { trackEvent, trackLogin, trackSignUp } from "@/components/analytics"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const handleNavClick = (section: string) => {
    trackEvent("navigation_click", {
      event_category: "navigation",
      event_label: section,
      page_location: "header",
    })
  }

  const handleLoginClick = () => {
    trackEvent("login_attempt", {
      event_category: "authentication",
      event_label: "header_login_button",
      page_location: "header",
    })
    trackLogin("email")
  }

  const handleSignUpClick = () => {
    trackEvent("signup_attempt", {
      event_category: "authentication",
      event_label: "header_signup_button",
      page_location: "header",
    })
    trackSignUp("email")
  }

  const handleLogoClick = () => {
    trackEvent("logo_click", {
      event_category: "navigation",
      event_label: "header_logo",
      page_location: "header",
    })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
          <img src="/logo.png" alt="KorbinAI Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-semibold tracking-tight">
            Korbin<span className="text-purple-400">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#problem"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("problem")}
          >
            Problem
          </a>
          <a
            href="#copilot"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("copilot")}
          >
            Copilot
          </a>
          <a
            href="#tools"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("tools")}
          >
            Tools
          </a>
          <a
            href="#comparison"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("comparison")}
          >
            Comparison
          </a>
          <a
            href="#solutions"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("solutions")}
          >
            Solutions
          </a>
          <Link
            href="/pricing"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("pricing")}
          >
            Pricing
          </Link>
          <a
            href="#faq"
            className="hover:text-purple-400 transition-colors font-medium text-sm"
            onClick={() => handleNavClick("faq")}
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-foreground hover:bg-secondary font-medium">
            <a
              href="https://app.korbinai.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLoginClick}
            >
              Login
            </a>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 font-medium"
          >
            <a
              href="https://app.korbinai.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSignUpClick}
            >
              Sign Up
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#problem"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("problem")}
            >
              Problem
            </a>
            <a
              href="#copilot"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("copilot")}
            >
              Copilot
            </a>
            <a
              href="#tools"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("tools")}
            >
              Tools
            </a>
            <a
              href="#comparison"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("comparison")}
            >
              Comparison
            </a>
            <a
              href="#solutions"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("solutions")}
            >
              Solutions
            </a>
            <Link
              href="/pricing"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("pricing")}
            >
              Pricing
            </Link>
            <a
              href="#faq"
              className="block hover:text-purple-400 transition-colors font-medium"
              onClick={() => handleNavClick("faq")}
            >
              FAQ
            </a>
            <Button asChild variant="ghost" className="w-full text-foreground hover:bg-secondary font-medium">
              <a
                href="https://app.korbinai.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLoginClick}
              >
                Login
              </a>
            </Button>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 font-medium"
            >
              <a
                href="https://app.korbinai.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSignUpClick}
              >
                Sign Up
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
