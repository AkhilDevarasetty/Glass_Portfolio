"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export default function Header() {
  const navBadgeRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const updateBadge = useCallback((activeLink: Element | null) => {
    const navBadge = navBadgeRef.current
    if (!activeLink || !navBadge) {
      if (navBadge) {
        navBadge.style.opacity = "0"
        navBadge.style.transform = "scale(0.95)"
      }
      return
    }
    const linkElement = activeLink as HTMLElement
    const rect = linkElement.getBoundingClientRect()
    const parentRect = linkElement.parentElement?.getBoundingClientRect()

    if (parentRect) {
      const left = rect.left - parentRect.left
      navBadge.style.opacity = "1"
      navBadge.style.transform = "scale(1)"
      navBadge.style.width = `${rect.width}px`
      navBadge.style.left = `${left}px`
    }
  }, [])

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll("section[id]")

    let timeoutId: NodeJS.Timeout
    const debouncedCallback = (entries: IntersectionObserverEntry[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")
          if (entry.isIntersecting && id) {
            setActiveSection(id)
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`)

            navLinks.forEach((link) => link.classList.remove("active"))

            if (navLink) {
              navLink.classList.add("active")
              updateBadge(navLink)
            }
          }
        })
      }, 50)
    }

    observerRef.current = new IntersectionObserver(debouncedCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const activeLink = document.querySelector(".nav-link.active")
        if (activeLink) {
          updateBadge(activeLink)
        }
      }, 100)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    const initialActiveLink = document.querySelector('.nav-link[href="#hero"]')
    if (initialActiveLink) {
      initialActiveLink.classList.add("active")
      updateBadge(initialActiveLink)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(timeoutId)
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
    }
  }, [updateBadge])

  return (
    <header className="flex justify-between items-center py-4 sticky top-4 z-20 bg-slate-900/60 backdrop-blur-lg px-6 rounded-xl border border-slate-100/10">
      <h1 className="text-2xl font-bold text-white tracking-wider">AD</h1>
      <nav className="hidden md:flex space-x-4 items-center header-nav relative">
        <div
          ref={navBadgeRef}
          id="nav-active-badge"
          className="absolute top-[-4px] bottom-[-4px] bg-white/10 border border-white/15 rounded-full z-0 opacity-0 transition-all duration-500 ease-out will-change-transform"
          style={{ transform: "scale(0.8)" }}
        />
        <a
          href="#hero"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Home
        </a>
        <a
          href="#experience"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Skills
        </a>
        <a
          href="#education"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Education
        </a>
        <a
          href="#academic-projects"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Projects
        </a>
        <a
          href="#awards"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Awards
        </a>
        <a
          href="#connect"
          className="nav-link font-medium px-3 py-1 transition-colors duration-200 text-slate-400 hover:text-slate-100 z-[1] relative will-change-transform"
        >
          Connect
        </a>
      </nav>
    </header>
  )
}