import Aurora from '../components/reactBits/Aurora'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gray-100 pt-20"
    >
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          Hola, soy Silvestre
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Ingeniero en Gestión y Desarrollo de Software, enfocado en crear
          soluciones web modernas, funcionales y orientadas a la experiencia del usuario.
        </p>

        <p className="mt-4 text-sm uppercase tracking-widest text-gray-900">
          Full Stack · React · JavaScript · PHP · TypeScript
        </p>
      </div>

    </section>
  )
}
