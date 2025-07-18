export default function EducationSection() {
  return (
    <section id="education" className="fade-in">
      <div className="glass-card p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Education</h2>
        <div className="relative">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
            <span className="text-slate-400 text-sm">2015 - 2019</span>
          </div>
          <div className="ml-7">
            <h3 className="text-xl font-semibold text-white mb-2">B.Tech. - Electronics & Communication Engineering</h3>
            <p className="text-slate-400">Vel Tech Rangarajan Dr. Sagunthala R&D Institute, Chennai</p>
          </div>
        </div>
      </div>
    </section>
  )
}
