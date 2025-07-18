export default function ContactSection() {
  return (
    <section id="contact" className="fade-in">
      <div className="glass-card max-w-2xl mx-auto p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          Feel free to reach out.
        </p>
        <a
          href="mailto:akhildevarasetty2@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}
