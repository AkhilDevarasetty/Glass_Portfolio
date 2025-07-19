import { Code, Server, Settings, CheckCircle } from "lucide-react"

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React 18", icon: "⚛️" },
    { name: "Next.js 14", icon: "▲" },
    { name: "Angular 16/JS", icon: "🅰️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript (ES6+)", icon: "🟨" },
    { name: "HTML5 & CSS3", icon: "</>" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "D3.js", icon: "📊" },
  ]
  const backendSkills = [
    { name: "Java 17", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "REST APIs", icon: "🔗" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "GraphQL", icon: "◉" },
  ]
  const devopsSkills = [
    { name: "Git", icon: "🌿" },
    { name: "GitLab CI/CD", icon: "🦊" },
    { name: "Docker", icon: "🐳" },
    { name: "Jest", icon: "🃏" },
    { name: "Jasmine & Karma", icon: "🌸" },
    { name: "JIRA", icon: "📋" },
    { name: "Figma", icon: "🎨" },
  ]
  const practiceSkills = [
    { name: "Agile/Scrum", icon: "🔄" },
    { name: "TDD", icon: "🧪" },
    { name: "Code Reviews", icon: "👀" },
    { name: "Micro-services", icon: "🔧" },
    { name: "Pair-Programming", icon: "👥" },
  ]

  return (
    <section id="skills" className="mt-20 fade-in" style={{ animationDelay: "0.4s" }}>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title text-violet-300">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h4 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center">
            <Code className="h-6 w-6 mr-3 text-amber-400" />
            <span>Frontend</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span key={skill.name} className="skill-tag py-1 px-3 rounded-full flex items-center gap-2">
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h4 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center">
            <Server className="h-6 w-6 mr-3 text-sky-400" />
            <span>Backend</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span key={skill.name} className="skill-tag py-1 px-3 rounded-full flex items-center gap-2">
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h4 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center">
            <Settings className="h-6 w-6 mr-3 text-slate-400" />
            <span>DevOps & Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {devopsSkills.map((skill) => (
              <span key={skill.name} className="skill-tag py-1 px-3 rounded-full flex items-center gap-2">
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h4 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 mr-3 text-emerald-400" />
            <span>Practices</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {practiceSkills.map((skill) => (
              <span key={skill.name} className="skill-tag py-1 px-3 rounded-full flex items-center gap-2">
                <span className="text-sm">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
