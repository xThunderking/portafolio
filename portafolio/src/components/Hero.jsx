import Aurora from './reactBits/Aurora'
import rayoSymbol from '../assets/logos/rayo-symbol.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-6rem)] overflow-hidden bg-black pt-20 text-white"
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-aurora-veil" aria-hidden="true"><span /><span /></div>
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--particle': index }} />)}
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Aurora
          colorStops={['#4a0009', '#f20d2f', '#ff5268']}
          blend={0.64}
          amplitude={1.3}
          speed={0.72}
          intensity={1.35}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.4)_65%,#000_100%)]" />

      <div className="hero-layout relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-12 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-8 lg:py-16">
        <div className="hero-copy min-w-0">
          <p data-reveal data-delay="80" className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
            <span className="h-px w-10 bg-[#f20d2f]" aria-hidden="true" />
            Silvestre Reyna · Software Engineer
          </p>

          <h1 aria-label="Software diseñado para avanzar." className="hero-title max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl xl:text-7xl">
            {'Software diseñado para avanzar.'.split(' ').map((word, index) => (
              <span key={word} aria-hidden="true" className="hero-word" style={{ '--word-index': index }}>{word}{' '}</span>
            ))}
          </h1>

          <p className="hero-description mt-6 max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl">
            Desarrollo full stack para sistemas web, automatización y soluciones orientadas a negocio.
          </p>

          <div className="hero-actions mt-9 grid grid-cols-2 gap-3 sm:flex">
            <a
              href="#projects"
              className="motion-button inline-flex min-h-12 items-center justify-center bg-[#f20d2f] px-6 text-sm font-bold text-white transition hover:bg-[#ff2442] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="motion-button inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-emblem" aria-hidden="true">
          <div className="hero-emblem-glow" />
          <div className="hero-orbit">
            {Array.from({ length: 6 }, (_, index) => <span key={index} style={{ '--ring': index }} />)}
          </div>
          <div className="hero-orbit-ticks" />
          <div className="hero-orbit-scan" />
          <div className="hero-orbit-plane" />
          <div className="hero-logo-core"><img src={rayoSymbol} alt="" className="hero-logo" /></div>
          <i className="hero-crosshair hero-crosshair-top" />
          <i className="hero-crosshair hero-crosshair-bottom" />
        </div>

        <div data-reveal data-delay="480" className="hero-stats grid max-w-2xl grid-cols-2 border-y border-white/15 text-sm text-zinc-400 lg:col-span-2">
          <div className="border-r border-white/15 py-4 pr-4">
            <strong className="mr-2 text-base text-white">08</strong>
            proyectos seleccionados
          </div>
          <div className="py-4 pl-4">
            <strong className="mr-2 text-base text-white">Full stack</strong>
            de interfaz a backend
          </div>
        </div>
      </div>
    </section>
  )
}
