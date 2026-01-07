export default function Technologies() {
  const techs = [
    // Frontend
    "React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3",

    // Backend
    "Node.js", "Express", "PHP", "Laravel", "Python",

    // Bases de datos
    "MySQL", "SQLite",

    // IA / Automatización
    "Inteligencia Artificial", "Chatbots", "Automatización", "APIs REST",

    // Dev / Infra
    "Linux", "Git", "GitHub", "Docker", "Vite"
  ]

  return (
    <section
      id="tech"
      className=" py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Tecnologías
        </h3>
        <p className="text-gray-600 mb-12">
          Herramientas y tecnologías con las que desarrollo soluciones modernas
        </p>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden h-28">
          <div className="flex gap-6 animate-tech-scroll whitespace-nowrap">
            {[...techs, ...techs].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full text-sm font-medium
                bg-white shadow-md border border-gray-200
                hover:border-violet-500 hover:text-violet-600
                hover:shadow-violet-200 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animación */}
      <style>
        {`
          @keyframes tech-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-tech-scroll {
            animation: tech-scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  )
}
