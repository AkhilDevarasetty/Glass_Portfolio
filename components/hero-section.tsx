import { Github, Linkedin } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="text-center fade-in">
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white">Akhil Devarasetty</h2>
        <p className="mt-4 text-xl md:text-2xl text-indigo-300">Software Developer</p>
        <p className="mt-6 max-w-2xl mx-auto text-slate-300">
          Front-End-focused Software Engineer with 4+ years of experience building performant web applications for
          healthcare and enterprise IT. Proven ability to accelerate release cycles, mentor teams, and cultivate a
          collaborative "positive coding vibe."
        </p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a
            href="https://github.com/AkhilDevarasetty"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
            rel="noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/akhildevarasetty"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
            rel="noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
