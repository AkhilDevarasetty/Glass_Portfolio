import { Code2, Users, Calendar } from "lucide-react"

export default function AcademicProjectsSection() {
  const project = {
    title: "IDEA JAM DP Full Stack Application",
    type: "Training Project",
    period: "January 2019 - March 2019",
    description:
      "Collaborated within a team to develop a forum-based website for organizational employees to post questions and engage in discussions.",
    features: ["Like/Dislike Functionality", "FAQ Module", "Full Stack Development"],
  }

  return (
    <section id="academic-projects" className="mt-20 fade-in" style={{ animationDelay: "0.7s" }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold section-title text-violet-300">Academic Projects</h3>
        <p className="text-lg text-slate-400 mt-2">Hands-on learning through collaborative development projects</p>
      </div>

      <div className="glass-card p-8 md:p-12">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-400/30">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{project.title}</h4>

            <div className="flex flex-wrap gap-4 mb-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.features.map((feature, index) => (
                <span
                  key={index}
                  className="skill-tag py-2 px-4 rounded-full flex items-center gap-2 text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
