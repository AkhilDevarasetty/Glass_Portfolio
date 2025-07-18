"use client"

import { useEffect, useCallback } from "react"

export default function GlassCardEffects() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(".glass-card")

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove, { passive: true })
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove)
      })
    }
  }, [handleMouseMove])

  return null
}
