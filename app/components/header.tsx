"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="BrieflyAI Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold">
            Briefly<span className="text-cyan-400">AI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">
            Pricing
          </a>
          <a href="#demo" className="hover:text-cyan-400 transition-colors">
            Demo
          </a>
          <a href="#login" className="hover:text-cyan-400 transition-colors">
            Login
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <a href="https://dash.brieflyai.xyz" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="block hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="#demo" className="block hover:text-cyan-400 transition-colors">
              Demo
            </a>
            <a href="#login" className="block hover:text-cyan-400 transition-colors">
              Login
            </a>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <a href="https://dash.brieflyai.xyz" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
