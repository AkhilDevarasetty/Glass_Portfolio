import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-center py-10 mt-20 space-y-8">
      <div className="glass-card max-w-4xl mx-auto p-8">
        <h4 className="text-xl font-semibold text-white">
          Looking for someone who can hit the ground running with modern React development, contribute to team culture,
          and deliver quality code? Let's talk!
        </h4>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://github.com/AkhilDevarasetty"
            target="_blank"
            className="inline-flex items-center bg-slate-700/50 text-slate-200 font-medium py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors"
            rel="noreferrer"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Portfolio
          </a>
          <a
            href="https://linkedin.com/in/akhildevarasetty"
            target="_blank"
            className="inline-flex items-center bg-slate-700/50 text-slate-200 font-medium py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold text-white">Akhil D Evarasetty</p>
        <p className="text-slate-400">Software Developer - Frontend Specialist - React Expert</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="mailto:akhildevarasetty2@gmail.com" className="text-slate-400 hover:text-white glow-icon">
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/AkhilDevarasetty"
            target="_blank"
            className="text-slate-400 hover:text-white"
            rel="noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/akhildevarasetty"
            target="_blank"
            className="text-slate-400 hover:text-white"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-6 flex items-center justify-center">
          Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> using React & Tailwind CSS
        </p>
        <p className="text-xs text-slate-600 mt-1">© 2025 Akhil D Evarasetty. All rights reserved.</p>
      </div>
    </footer>
  )
}
