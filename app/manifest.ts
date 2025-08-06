export const dynamic = "force-static"

import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KorbinAI",
    short_name: "KorbinAI",
    description: "The AI copilot that turns plain English into production-ready code and professional content.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A", // Black background
    theme_color: "#22C55E", // Green theme color
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
    ],
  }
}
