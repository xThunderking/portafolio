import LightPillar from '../components/reactBits/LightPillar'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gray-100 pt-20"
    >
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={5.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h2 className="text-5xl font-bold mb-4 text-white">
          Hola, soy Silvestre
        </h2>

        <p className="text-white text-lg">
          Desarrollador Web enfocado en crear soluciones modernas y funcionales
        </p>
      </div>
    </section>
  )
}
