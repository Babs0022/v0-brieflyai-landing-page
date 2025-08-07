import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: {
    default: "KorbinAI - An AI Assistant That Actually Gets It",
    template: "%s | KorbinAI",
  },
  description:
    "Your most resourceful partner for brainstorming, coding, research, content creation, and strategic planning. Built on advanced AI frameworks that understand what you need before you ask.",
  keywords: [
    "AI assistant",
    "AI copilot",
    "strategic AI",
    "brainstorming AI",
    "content creation AI",
    "development AI",
    "research AI",
    "AI for creators",
    "AI for developers",
    "intelligent assistant",
    "contextual AI",
    "strategic planning AI",
  ],
  authors: [{ name: "KorbinAI Team" }],
  creator: "KorbinAI",
  publisher: "KorbinAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://korbinai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://korbinai.com",
    title: "KorbinAI - An AI Assistant That Actually Gets It",
    description:
      "Your most resourceful partner for brainstorming, coding, research, content creation, and strategic planning. Built to understand what you need before you ask.",
    siteName: "KorbinAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KorbinAI - AI Assistant That Actually Gets It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KorbinAI - An AI Assistant That Actually Gets It",
    description:
      "Your most resourceful partner for brainstorming, coding, research, content creation, and strategic planning.",
    site: "@korbinai",
    creator: "@korbinai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
