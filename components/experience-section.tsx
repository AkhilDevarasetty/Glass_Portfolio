import { ChevronRight } from "lucide-react"
import { memo } from "react"

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: string } = {
    React: "⚛️",
    Angular: "🅰️",
    TypeScript: "📘",
    "Tailwind CSS": "🎨",
    "React Query": "🔄",
    Figma: "🎨",
    AngularJS: "🅰️",
    "Spring Boot": "🍃",
    "D3.js": "📊",
    MongoDB: "🍃",
    "JIRA APIs": "📋",
    "Machine Learning": "🤖",
  }
  return iconMap[skill] || "🔧"
}

const ExperienceCard = memo(
  ({
    title,
    company,
    subtitle,
    period,
    location,
    description,
    achievements,
    skills,
  }: {
    title: string
    company: string
    subtitle: string
    period: string
    location: string
    description: string
    achievements: string[]
    skills: string[]
  }) => (
    <div className="glass-card p-8 will-change-transform">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-semibold text-white">{title}</h4>
          <p className="text-indigo-400 font-medium">{company}</p>
          <p className="text-indigo-400 font-light">{subtitle}</p>
        </div>
        <div className="text-right text-sm text-slate-400">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <h5 className="font-semibold text-white mb-2 flex items-center">
        <ChevronRight className="w-5 h-5 mr-2 text-indigo-400" />
        Key Achievements
      </h5>
      <ul className="list-disc list-inside text-slate-300 space-y-2 pl-4">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag text-sm font-medium py-1 px-3 rounded-full flex items-center gap-2">
            <span className="text-sm">{getSkillIcon(skill)}</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  ),
)

ExperienceCard.displayName = "ExperienceCard"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "IQVIA",
      subtitle: "IVP Collect — Pharmacovigilance Data-Collection Platform",
      period: "Jan 2022 - Aug 2023",
      location: "Bengaluru, India",
      description:
        "Working as part of team in developing a web application which collect's the information of side effects of any drug trial/usage.",
      achievements: [
        "Fixed production defects, delivered 10+ minor features, and mentored two junior engineers on modern front-end patterns",
        "Led front-end refactor: decoupled legacy Angular JS 1.6 UI into modular Angular 11 components and prepared React POC for next migration",
        "Achieved 28% bundle size reduction and improved load time from 1.4s to 0.9s",
        "Built React-based POC replicating core Angular workflows, demonstrating improved maintainability and performance",
        "Developed reusable React components using hooks and context API for state management",
        "Collaborated with design team to translate Figma prototypes into pixel-perfect React components using Tailwind CSS",
        "Integrated React Query for async data fetching, caching, and background refetching",
      ],
      skills: ["React", "Angular", "TypeScript", "Tailwind CSS", "React Query", "Figma"],
    },
    {
      title: "Senior Software Engineer",
      company: "Mindtree Ltd.",
      subtitle: "Multiple Enterprise Projects",
      period: "Jan 2019 - Jan 2022",
      location: "Bengaluru, India",
      description:
        "Contributed to multiple web applications automating organizational workflows and IT deployment lifecycles.",
      achievements: [
        "SMARTPANE (Oct 2020 - Jan 2022): Developed front-end with AngularJS and back-end with Spring Boot",
        "Successfully migrated existing AngularJS application to Angular 10",
        "Developed multiple feature modules utilizing jQuery, JavaScript, HTML, and CSS",
        "Integrated bug reporting functionality using JIRA REST APIs",
        "CAPE (Aug 2019 - Jan 2022): Automated IT application deployment and maintenance lifecycle",
        "Migrated ES5-based controllers to ES6 class-structured architecture",
        "Gained hands-on experience with D3.js and Adaptive Semantic Form Definition (ASFD) library",
        "SWAT R&D: Prototyped facial-gender recognition model with 92% accuracy",
        "Developed POC for storing large uploaded files in chunks using MongoDB",
      ],
      skills: ["AngularJS", "Angular", "Spring Boot", "D3.js", "MongoDB", "JIRA APIs", "Machine Learning"],
    },
  ]

  return (
    <section id="experience" className="mt-20 fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold section-title text-violet-300">Professional Experience</h3>
        <p className="text-lg text-slate-400 mt-2">
          Building innovative solutions across healthcare and enterprise domains
        </p>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}
