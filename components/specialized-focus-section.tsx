import { Target } from "lucide-react"

export default function SpecializedFocusSection() {
  return (
    <section id="specialized-focus" className="mt-20 fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="glass-card p-6 md:p-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-shrink-0">
            <Target className="h-8 w-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-300 mb-2">🎯 Specialized Focus</h3>
            <p className="text-slate-300 text-sm md:text-base">
              <span className="text-blue-400 font-semibold">70% Frontend</span> /
              <span className="text-purple-400 font-semibold"> 30% Backend</span> - Passionate about creating
              exceptional user experiences with solid backend knowledge
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}