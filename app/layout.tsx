import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GlassCardEffects from "@/components/glass-card-effects"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akhil Devarasetty - Software Developer",
  description:
    "Front-End-focused Software Engineer with 4+ years of experience building performant web applications for healthcare and enterprise IT.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GlassCardEffects />
      </body>
    </html>
  )
}
