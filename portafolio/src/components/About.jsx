export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Sobre mí</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ingeniero en Gestión y Desarrollo de Software enfocado en crear
            soluciones digitales eficientes, escalables y orientadas a negocio.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Texto principal */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">
              Perfil profesional
            </h4>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Soy Ingeniero en Gestión y Desarrollo de Software con experiencia en
              desarrollo web <span className="font-medium text-gray-800">full stack</span>,
              especializado en la creación de soluciones digitales para PYMES.
              He trabajado en proyectos reales donde la tecnología se utiliza
              como una herramienta para optimizar procesos, mejorar la experiencia
              del usuario y generar valor al negocio.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Tengo experiencia desarrollando sistemas web, landing pages,
              módulos personalizados y soluciones con integración de
              <span className="font-medium text-gray-800"> inteligencia artificial</span>,
              como ChatBots orientados a atención y resolución de dudas.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
                Full Stack
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
                PYMES
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
                Optimización de procesos
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
                UX / UI funcional
              </span>
            </div>
          </div>

          {/* Cards de experiencia */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h5 className="font-semibold text-lg mb-2">Experiencia</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollador Full Stack en <span className="font-medium">CODRIFY</span>,
                participando en el diseño e implementación de landing pages,
                módulos funcionales y ChatBots con IA para empresas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h5 className="font-semibold text-lg mb-2">Tecnologías</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                JavaScript, TypeScript, React, PHP, Java, SQL, HTML, CSS,
                control de versiones con Git y SVN.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h5 className="font-semibold text-lg mb-2">Formación</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ingeniero en Gestión y Desarrollo de Software, graduado de la
                Universidad Tecnológica de la Costa Grande de Guerrero.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition">
              <h5 className="font-semibold text-lg mb-2">Enfoque</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollo soluciones prácticas, escalables y orientadas
                a resultados, priorizando claridad, rendimiento y usabilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
