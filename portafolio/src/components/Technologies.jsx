export default function Technologies() {
  const techs = [
    // Frontend
    "React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Next.js",

    // Backend
    "Node.js", "Express", "NestJS", "PHP", "Laravel", "Python", "FastAPI",

    // Bases de datos
    "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis",

    // Cloud / Plataforma
    "Firebase", "AWS S3", "AWS EC2", "AWS Lambda", "Supabase", "Cloudflare",

    // IA / Automatizacion
    "Inteligencia Artificial", "Chatbots", "Automatización", "APIs REST",

    // Dev / Infra
    "Linux", "Git", "GitHub", "Docker", "Docker Compose", "Nginx", "Vite", "Prisma", "JWT", "GitHub Actions", "CI/CD"
  ]

  const row1 = techs.filter((_, index) => index % 2 === 0)
  const row2 = techs.filter((_, index) => index % 2 !== 0)

  return (
    <section
      id="tech"
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Tecnologías
        </h3>
        <p className="text-gray-600 mb-12">
          Herramientas modernas para crear productos web escalables, seguros y listos para produccion
        </p>

        {/* Carruseles en dos lineas para mejor lectura en celular */}
        <div className="space-y-3">
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max gap-3 sm:gap-4 animate-tech-scroll-left whitespace-nowrap py-1">
              {[...row1, ...row1].map((tech, index) => (
                <span
                  key={`row1-${index}`}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium
                  bg-white shadow-md border border-gray-200
                  hover:border-violet-500 hover:text-violet-600
                  hover:shadow-violet-200 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex w-max gap-3 sm:gap-4 animate-tech-scroll-right whitespace-nowrap py-1">
              {[...row2, ...row2].map((tech, index) => (
              <span
                key={`row2-${index}`}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium
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
      </div>

      {/* Animaciones */}
      <style>
        {`
          @keyframes tech-scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes tech-scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-tech-scroll-left {
            animation: tech-scroll-left 28s linear infinite;
          }

          .animate-tech-scroll-right {
            animation: tech-scroll-right 32s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-tech-scroll-left {
              animation-duration: 22s;
            }

            .animate-tech-scroll-right {
              animation-duration: 24s;
            }
          }
        `}
      </style>
    </section>
  )
}
