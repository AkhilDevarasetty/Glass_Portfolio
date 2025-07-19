"use client"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SpecializedFocusSection from "@/components/specialized-focus-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import AcademicProjectsSection from "@/components/academic-projects-section"
import AwardsSection from "@/components/awards-section"
import ConnectSection from "@/components/connect-section"
import Footer from "@/components/footer"
import GradientCanvas from "@/components/gradient-canvas"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useEffect(() => {
    // Enhanced smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href") as string)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
      })
    })

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {})
      })
    }
  }, [])

  return (
    <div className={`${inter.className} antialiased`}>
      <GradientCanvas />

      <div className="main-container min-h-screen p-4 sm:p-6 md:p-8 relative z-[1]">
        <div className="max-w-7xl mx-auto">
          <Header />

          <main className="mt-10 md:mt-20">
            <HeroSection />
            <SpecializedFocusSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <AcademicProjectsSection />
            <AwardsSection />
            <ConnectSection />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}
