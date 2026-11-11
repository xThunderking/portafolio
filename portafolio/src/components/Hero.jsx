import Aurora from './reactBits/Aurora'
import rayoSymbol from '../assets/logos/rayo-symbol.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-6rem)] overflow-hidden bg-black pt-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <Aurora
          colorStops={['#4a0009', '#f20d2f', '#ff5268']}
          blend={0.48}
          amplitude={0.86}
          speed={0.38}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72)_70%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[2] hidden w-px bg-white/10 lg:block" />
      <img
        src={rayoSymbol}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 z-[2] hidden h-[78%] -translate-y-1/2 object-contain opacity-[0.14] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-6 py-12 sm:py-16">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
            <span className="h-px w-10 bg-[#f20d2f]" aria-hidden="true" />
            Silvestre Reyna · Software Engineer
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Software diseñado para avanzar.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Desarrollo full stack para sistemas web, automatización y soluciones orientadas a negocio.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center bg-[#f20d2f] px-6 text-sm font-bold text-white transition hover:bg-[#ff2442] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-2 border-y border-white/15 text-sm text-zinc-400">
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
