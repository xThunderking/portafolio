import rayoLogo from '../assets/logos/rayo-logo.png'

const contactLinks = [
  {
    label: 'LinkedIn',
    detail: 'Perfil profesional',
    href: 'https://www.linkedin.com/in/silvestre-ignacio-reyna-rayo-01403b334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    label: 'GitHub',
    detail: '@xThunderking',
    href: 'https://github.com/xThunderking',
  },
  {
    label: 'WhatsApp',
    detail: 'Conversación directa',
    href: 'https://wa.me/527551427515',
  },
  {
    label: 'Currículum',
    detail: 'Ver experiencia completa',
    href: 'https://drive.google.com/file/d/1jTpmY4fkbJ9yqddE0TldSMHXP7qBLWsE/view?usp=sharing',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-black py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-[#ff2442]">Contacto / 04</p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Conversemos sobre el próximo producto.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Para oportunidades profesionales, colaboraciones o proyectos de software.
            </p>
            <a
              href="mailto:sirr.rayo@gmail.com"
              className="mt-9 inline-flex min-h-12 items-center justify-center bg-[#f20d2f] px-6 text-sm font-bold text-white transition hover:bg-[#ff2442] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Escribir por correo
            </a>
          </div>

          <div className="border-t border-white/15">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-white/15 py-5 transition hover:border-[#f20d2f]"
              >
                <span>
                  <span className="block font-bold text-white">{link.label}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{link.detail}</span>
                </span>
                <span className="text-xl text-zinc-500 transition group-hover:text-[#ff2442]" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <img src={rayoLogo} alt="RAYO Software Engineer" className="h-12 w-auto object-contain object-left" />
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Silvestre Reyna. Software Engineer.</p>
        </footer>
      </div>
    </section>
  )
}
