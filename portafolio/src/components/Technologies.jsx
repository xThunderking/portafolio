export default function Technologies() {
  return (
    <section id="tech" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Tecnologías</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "JavaScript", "Node.js", "MySQL", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
