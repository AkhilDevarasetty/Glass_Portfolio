"use client"

import { useEffect, useRef, useCallback } from "react"

interface Circle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  color: [number, number, number]
}

export default function GradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const circlesRef = useRef<Circle[]>([])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initCircles()
  }, [])

  const initCircles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const w = canvas.width
    const h = canvas.height

    circlesRef.current = [
      {
        x: w * 0.2,
        y: h * 0.4,
        r: w * 0.3,
        vx: Math.random() * 0.4 - 0.2,
        vy: Math.random() * 0.4 - 0.2,
        color: [99, 102, 241], // Indigo
      },
      {
        x: w * 0.8,
        y: h * 0.6,
        r: w * 0.4,
        vx: Math.random() * 0.4 - 0.2,
        vy: Math.random() * 0.4 - 0.2,
        color: [139, 92, 246], // Purple
      },
      {
        x: w * 0.5,
        y: h * 0.8,
        r: w * 0.25,
        vx: Math.random() * 0.4 - 0.2,
        vy: Math.random() * 0.4 - 0.2,
        color: [59, 130, 246], // Blue
      },
    ]
  }, [])

  const updateCircle = useCallback((circle: Circle, canvas: HTMLCanvasElement) => {
    circle.x += circle.vx
    circle.y += circle.vy

    if (circle.x - circle.r < 0 || circle.x + circle.r > canvas.width) circle.vx *= -1
    if (circle.y - circle.r < 0 || circle.y + circle.r > canvas.height) circle.vy *= -1
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    circlesRef.current.forEach((circle) => {
      updateCircle(circle, canvas)
      const grad = ctx.createRadialGradient(circle.x, circle.y, 1, circle.x, circle.y, circle.r)
      grad.addColorStop(0, `rgba(${circle.color[0]}, ${circle.color[1]}, ${circle.color[2]}, 0.8)`)
      grad.addColorStop(1, `rgba(${circle.color[0]}, ${circle.color[1]}, ${circle.color[2]}, 0)`)
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [updateCircle])

  useEffect(() => {
    resizeCanvas()
    animate()

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(resizeTimeout)
    }
  }, [resizeCanvas, animate])

  return (
    <canvas
      ref={canvasRef}
      id="gradient-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-1] blur-[100px] opacity-70 will-change-transform"
    />
  )
}
