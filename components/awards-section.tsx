import { Award } from "lucide-react"

export default function AwardsSection() {
  const awards = [
    {
      title: "Strategic Thinking Award",
      company: "Mindtree - 2020-2021",
      description: "For UI innovation, release coordination, and deployment strategy",
    },
    {
      title: "Mastermind Award",
      company: "Mindtree - 2020",
      description: "Recognition for exceptional problem-solving abilities",
    },
    {
      title: "Spot-On Award",
      company: "Mindtree - 2019",
      description: "For outstanding performance and quick delivery",
    },
  ]

  return (
    <section id="awards" className="mt-20 fade-in" style={{ animationDelay: "0.6s" }}>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title text-violet-300">
        Awards & Recognition
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="glass-card p-8 text-center">
            <div className="mb-4 text-yellow-400">
              <Award className="h-12 w-12 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-white">{award.title}</h4>
            <p className="text-indigo-400 mt-1">{award.company}</p>
            <p className="text-slate-300 mt-3 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
