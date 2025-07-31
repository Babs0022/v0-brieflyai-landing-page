"use client"

import { useEffect } from "react"
import { trackEvent } from "@/components/analytics"

export function useScrollTracking() {
  useEffect(() => {
    let scrollDepth = 0
    const milestones = [25, 50, 75, 100]
    const trackedMilestones = new Set<number>()

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      const currentScrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

      if (currentScrollDepth > scrollDepth) {
        scrollDepth = currentScrollDepth

        // Track scroll milestones
        milestones.forEach((milestone) => {
          if (scrollDepth >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone)
            trackEvent("scroll_depth", {
              event_category: "engagement",
              event_label: `${milestone}%`,
              value: milestone,
            })
          }
        })
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
    }
  }, [])
}
