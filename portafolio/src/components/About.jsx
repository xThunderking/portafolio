const profileDetails = [
  {
    title: 'Experiencia',
    text: 'Desarrollo full stack en CODRIFY, creando sitios, módulos funcionales y soluciones con inteligencia artificial.',
  },
  {
    title: 'Formación',
    text: 'Ingeniería en Gestión y Desarrollo de Software por la Universidad Tecnológica de la Costa Grande de Guerrero.',
  },
  {
    title: 'Enfoque',
    text: 'Productos claros y escalables para PYMES y sector salud, orientados a resolver procesos reales de negocio.',
  },
  {
    title: 'Base técnica',
    text: 'React, Node.js, Laravel, SQL, Docker, Firebase, AWS S3, APIs REST y control de versiones con Git.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#101010] py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-[#ff2442]">Perfil / 02</p>
            <h2 className="max-w-md text-4xl font-black md:text-5xl">Perfil, en breve.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Soy Ingeniero en Gestión y Desarrollo de Software. Diseño y construyo soluciones web full stack para convertir necesidades operativas en productos simples de usar y orientados a resultados.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Full stack', 'PYMES', 'Sector salud', 'Automatización'].map(item => (
                <span key={item} className="border border-white/15 px-3 py-2 text-xs font-semibold text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid border-t border-white/15 sm:grid-cols-2">
            {profileDetails.map((detail, index) => (
              <div
                key={detail.title}
                className={`border-b border-white/15 py-7 sm:px-7 ${index % 2 === 0 ? 'sm:border-r' : ''}`}
              >
                <p className="mb-3 font-mono text-xs text-[#ff2442]">0{index + 1}</p>
                <h3 className="text-lg font-bold text-white">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
