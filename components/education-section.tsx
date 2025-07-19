import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="mt-20 fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold section-title text-violet-300">Education</h3>
        <p className="text-lg text-slate-400 mt-2">Academic foundation in Electronics & Communication Engineering</p>
      </div>

      <div className="glass-card p-8 md:p-12">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Technology</h4>
            <h5 className="text-xl text-indigo-400 font-semibold mb-4">Electronics & Communication Engineering</h5>
            <p className="text-slate-300 text-lg mb-4">Vel Tech Rangarajan Dr. Sagunthala R&D Institute</p>

            <div className="flex flex-wrap gap-4 mb-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2015 – 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="glass-card p-6 bg-slate-800/30">
              <h6 className="text-lg font-semibold text-white mb-3">Foundation for Software Development</h6>
              <p className="text-slate-300 leading-relaxed">
                Strong technical foundation in electronics, communication systems, and programming fundamentals that
                provided the analytical thinking and problem-solving skills essential for software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
