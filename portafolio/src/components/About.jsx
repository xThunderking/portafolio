import MagicBento from '../components/reactBits/MagicBento'

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
        <p className="text-gray-600">
          Soy Ingeniero en Gestión y Desarrollo de Software con experiencia en
          desarrollo web full stack. He trabajado en proyectos orientados a PYMES,
          creando soluciones digitales que combinan funcionalidad, diseño y
          optimización de procesos mediante tecnología moderna.
        </p>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />

      </div>
    </section>
  )
}
