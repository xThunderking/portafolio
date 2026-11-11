import { useState } from 'react'
import rayoLogo from '../assets/logos/rayo-logo.png'

const navigation = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Perfil', href: '#about' },
  { label: 'Stack', href: '#tech' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="animated-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
          aria-label="RAYO, ir al inicio"
          onClick={closeMenu}
        >
          <img
            src={rayoLogo}
            alt="RAYO Software Engineer"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-300 transition hover:text-white focus:outline-none focus-visible:text-[#ff2442]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/19Z6dreZ7j8tRQrm_wA385sFtl_KtE8Y3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button border border-[#f20d2f] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#f20d2f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a70]"
          >
            Ver CV
          </a>
        </div>

        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-[#f20d2f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f] md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(current => !current)}
        >
          <span className="sr-only">Menú</span>
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu-enter border-t border-white/10 bg-[#080808] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-lg font-bold text-zinc-200 transition hover:text-[#ff2442]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/19Z6dreZ7j8tRQrm_wA385sFtl_KtE8Y3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex justify-center bg-[#f20d2f] px-4 py-3 text-sm font-bold text-white"
              onClick={closeMenu}
            >
              Ver CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
