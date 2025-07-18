import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export default function ConnectSection() {
  return (
    <section id="connect" className="mt-20 text-center fade-in" style={{ animationDelay: "1s" }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold section-title text-violet-300">Let's Connect</h3>
        <p className="text-lg text-slate-400 mt-2">
          Ready to contribute to your team's success. Let's discuss how I can help build amazing web experiences.
        </p>
      </div>
      <div className="glass-card max-w-4xl mx-auto p-8">
        <h4 className="text-2xl font-semibold text-white mb-4">Ready for New Opportunities</h4>
        <p className="text-slate-300 max-w-3xl mx-auto">
          I'm currently seeking new opportunities where I can leverage my expertise in React, TypeScript, and modern
          frontend technologies to create exceptional user experiences. Whether it's building from scratch or improving
          existing systems, I'm excited to contribute to innovative projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <a href="mailto:akhildevarasetty2@gmail.com" className="glass-card p-6 text-left hover:border-indigo-400/50">
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-3 text-indigo-400" />
              <h5 className="font-semibold text-white">Email</h5>
            </div>
            <p className="text-indigo-300 text-sm mt-2">akhildevarasetty2@gmail.com</p>
          </a>
          <a
            href="https://github.com/AkhilDevarasetty"
            target="_blank"
            className="glass-card p-6 text-left hover:border-indigo-400/50"
            rel="noreferrer"
          >
            <div className="flex items-center">
              <Github className="h-6 w-6 mr-3 text-indigo-400" />
              <h5 className="font-semibold text-white">GitHub</h5>
            </div>
            <p className="text-indigo-300 text-sm mt-2">github.com/AkhilDevarasetty</p>
          </a>
          <a
            href="https://linkedin.com/in/akhildevarasetty"
            target="_blank"
            className="glass-card p-6 text-left hover:border-indigo-400/50"
            rel="noreferrer"
          >
            <div className="flex items-center">
              <Linkedin className="h-6 w-6 mr-3 text-indigo-400" />
              <h5 className="font-semibold text-white">LinkedIn</h5>
            </div>
            <p className="text-indigo-300 text-sm mt-2">linkedin.com/in/akhildevarasetty</p>
          </a>
          <div className="glass-card p-6 text-left">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-indigo-400" />
              <h5 className="font-semibold text-white">Location</h5>
            </div>
            <p className="text-indigo-300 text-sm mt-2">Santa Clara, CA</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700/50 pt-6">
          <p className="text-white font-semibold mb-2">Preferred Contact Method</p>
          <a
            href="mailto:akhildevarasetty2@gmail.com"
            className="inline-block bg-slate-700/50 text-slate-200 font-medium py-2 px-5 rounded-lg hover:bg-slate-700 transition-colors glow-button"
          >
            Send Email
          </a>
          <p className="text-xs text-slate-500 mt-3">I typically respond within 24 hours</p>
        </div>
      </div>
    </section>
  )
}
