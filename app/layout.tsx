import type React from "react"
import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument-sans",
})

export const metadata: Metadata = {
  title: {
    default: "KorbinAI - The AI Assistant That Actually Gets It | Strategic AI Copilot",
    template: "%s | KorbinAI - Strategic AI Assistant",
  },
  description:
    "KorbinAI is the strategic AI copilot that understands context and delivers production-ready code, content, and insights. Built for creators, developers, and professionals who need more than generic AI responses.",
  keywords: [
    "AI assistant",
    "AI copilot",
    "strategic AI",
    "production-ready code",
    "AI code generation",
    "React components AI",
    "content creation AI",
    "brainstorming AI",
    "development AI",
    "research AI",
    "AI for creators",
    "AI for developers",
    "intelligent assistant",
    "contextual AI",
    "strategic planning AI",
    "AI prompt engineering",
    "visual design AI",
    "data analysis AI",
    "KorbinAI",
    "better than ChatGPT",
    "AI that understands context",
  ],
  authors: [{ name: "KorbinAI Team", url: "https://korbinai.com" }],
  creator: "KorbinAI",
  publisher: "KorbinAI",
  category: "Technology",
  classification: "AI Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://korbinai.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://korbinai.com",
    title: "KorbinAI - The AI Assistant That Actually Gets It",
    description:
      "Strategic AI copilot that delivers production-ready code, strategic insights, and contextual solutions. Built for professionals who need more than generic AI responses.",
    siteName: "KorbinAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KorbinAI - Strategic AI Assistant That Delivers Production-Ready Results",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1080,
        height: 1080,
        alt: "KorbinAI Logo - Strategic AI Assistant",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KorbinAI - The AI Assistant That Actually Gets It",
    description:
      "Strategic AI copilot that delivers production-ready code and contextual solutions. More than just another chatbot.",
    site: "@korbinai",
    creator: "@korbinai",
    images: [
      {
        url: "/og-image.png",
        alt: "KorbinAI - Strategic AI Assistant",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#8b5cf6",
    "theme-color": "#8b5cf6",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={instrumentSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={`${instrumentSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
