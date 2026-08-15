import { useEffect, useState } from 'react'
import agenda1 from '../assets/img/agenda1.png'
import agenda2 from '../assets/img/agenda2.png'
import agenda3 from '../assets/img/agenda3.png'
import codrify1 from '../assets/img/codrify1.png'
import codrify2 from '../assets/img/codrify2.png'
import codrify3 from '../assets/img/codrify3.png'
import farmaclinic1 from '../assets/img/farmaclinic.png'
import farmaclinic2 from '../assets/img/farmaclinic2.png'
import farmaclinic3 from '../assets/img/farmaclinic3.png'
import fermont1 from '../assets/img/fermont1.png'
import fermont2 from '../assets/img/fermont2.png'
import fermont3 from '../assets/img/fermont3.png'

const projects = [
  {
    title: 'Sistema Agenda',
    type: 'Sistema web',
    summary: 'Plataforma para administrar aulas, reservas y vistas según el tipo de usuario.',
    impact: 'Centraliza la gestión de espacios y reduce la fricción operativa.',
    stack: ['React', 'Node', 'Reservas', 'Administración'],
    images: [
      { src: agenda1, alt: 'Panel principal de administración del sistema Agenda' },
      { src: agenda2, alt: 'Módulo de reservas de aulas' },
      { src: agenda3, alt: 'Vista principal de usuario del sistema Agenda' },
    ],
  },
  {
    title: 'Codrify',
    type: 'Sitio corporativo',
    summary: 'Experiencia web para presentar servicios, posicionar la empresa y facilitar el contacto.',
    impact: 'Refuerza la presencia digital y crea una ruta clara hacia la conversión.',
    stack: ['React', 'Diseño UI', 'Contacto', 'Branding'],
    images: [
      { src: codrify1, alt: 'Página principal de Codrify' },
      { src: codrify2, alt: 'Módulo de contacto de Codrify' },
      { src: codrify3, alt: 'Página de empresas de Codrify' },
    ],
  },
  {
    title: 'Farmaclinic',
    type: 'Sistema hospitalario',
    summary: 'Plataforma para gestionar y controlar procesos de farmacovigilancia en el entorno clínico.',
    impact: 'Centraliza reportes, mejora la trazabilidad clínica y fortalece la seguridad del paciente.',
    stack: ['Sector salud', 'Farmacovigilancia', 'Trazabilidad', 'Dashboard'],
    images: [
      { src: farmaclinic1, alt: 'Dashboard de farmacovigilancia de Farmaclinic' },
      { src: farmaclinic2, alt: 'Registro y seguimiento de pacientes en Farmaclinic' },
      { src: farmaclinic3, alt: 'Control de eventos adversos en Farmaclinic' },
    ],
  },
  {
    title: 'Fermont',
    type: 'Gestión cosmetológica',
    summary: 'Sistema web mobile-first para gestionar clientes y valoraciones de una cabina cosmetológica.',
    impact: 'Integra historial cosmetológico, mapa interactivo, protocolo, consentimiento firmado, fotografías y reportes de valoración en un solo flujo.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    gallery: 'portrait',
    images: [
      { src: fermont1, alt: 'Panel móvil principal del sistema Fermont' },
      { src: fermont2, alt: 'Gestión de valoraciones pendientes en Fermont' },
      { src: fermont3, alt: 'Mapa facial interactivo de Fermont' },
    ],
  },
]

const additionalProjects = [
  {
    title: 'Whaticket',
    type: 'Mensajería empresarial',
    summary: 'Plataforma de control de sesiones de WhatsApp que identifica al responsable de cada mensaje y mejora la trazabilidad por agente.',
  },
  {
    title: 'SIRRGEN',
    type: 'Gestión clínica',
    summary: 'Agenda clínica integral con pacientes, historia médica, sitio institucional y un portal para consultar el historial de citas.',
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const direction = event.key === 'ArrowRight' ? 1 : -1
        setSelectedImage(current => {
          if (!current) return null
          const total = projects[current.projectIndex].images.length
          return {
            ...current,
            imageIndex: (current.imageIndex + direction + total) % total,
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  const openImage = (projectIndex, imageIndex) => {
    setSelectedImage({ projectIndex, imageIndex })
  }

  const moveImage = direction => {
    setSelectedImage(current => {
      if (!current) return null
      const total = projects[current.projectIndex].images.length
      return {
        ...current,
        imageIndex: (current.imageIndex + direction + total) % total,
      }
    })
  }

  const selectedProject = selectedImage ? projects[selectedImage.projectIndex] : null
  const selectedAsset = selectedProject ? selectedProject.images[selectedImage.imageIndex] : null

  return (
    <>
      <section id="projects" className="border-t border-white/10 bg-[#070707] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-6 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase text-[#ff2442]">Proyectos / 01</p>
              <h2 className="text-4xl font-black text-white md:text-5xl">Trabajo seleccionado.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-400 lg:justify-self-end">
              Productos construidos para resolver necesidades concretas, desde la interfaz hasta la lógica del sistema.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, projectIndex) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[4px] border border-white/15 bg-[#101010] transition hover:border-[#f20d2f]/70 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]"
              >
                <div className="border-b border-white/10 bg-black p-3 lg:border-b-0 lg:border-r">
                  {project.gallery === 'portrait' ? (
                    <div className="grid grid-cols-3 gap-3">
                      {project.images.map((image, imageIndex) => (
                        <button
                          key={image.alt}
                          type="button"
                          onClick={() => openImage(projectIndex, imageIndex)}
                          className="group relative aspect-[9/16] overflow-hidden rounded-[3px] bg-zinc-950 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-contain object-top transition duration-500 group-hover:scale-[1.025]"
                            loading="lazy"
                          />
                          <span className="absolute bottom-2 left-2 bg-black/85 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                            Vista 0{imageIndex + 1}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => openImage(projectIndex, 0)}
                        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-zinc-950 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                      >
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                          loading={projectIndex === 0 ? 'eager' : 'lazy'}
                        />
                        <span className="absolute bottom-3 left-3 bg-black/85 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                          Abrir vista 01
                        </span>
                      </button>

                      <div className="mt-3 grid grid-cols-2 gap-3">
                        {project.images.slice(1).map((image, imageIndex) => (
                          <button
                            key={image.alt}
                            type="button"
                            onClick={() => openImage(projectIndex, imageIndex + 1)}
                            className={`group relative overflow-hidden rounded-[3px] bg-zinc-950 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f] ${project.images.length === 2 ? 'col-span-2 aspect-[16/5]' : 'aspect-video'}`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                              loading="lazy"
                            />
                            <span className="absolute bottom-2 left-2 bg-black/85 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                              Vista 0{imageIndex + 2}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <span className="text-xs font-bold uppercase text-[#ff2442]">{project.type}</span>
                      <span className="font-mono text-sm text-zinc-500">0{projectIndex + 1}</span>
                    </div>

                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                    <p className="mt-4 text-base leading-7 text-zinc-400">{project.summary}</p>
                    <p className="mt-6 border-l-2 border-[#f20d2f] pl-4 text-sm font-semibold leading-6 text-zinc-200">
                      {project.impact}
                    </p>
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 border-b border-[#f20d2f] pb-1 text-sm font-bold text-white transition hover:text-[#ff2442] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                      >
                        Ver repositorio
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {project.stack.map(item => (
                      <span
                        key={item}
                        className="border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border-t border-white/15 pt-10">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase text-[#ff2442]">Más experiencia</p>
                <h3 className="text-3xl font-black text-white">Otros proyectos.</h3>
              </div>
              <p className="max-w-lg text-sm leading-6 text-zinc-500">
                Soluciones adicionales centradas en comunicación empresarial y operación clínica.
              </p>
            </div>

            <div className="grid border-t border-white/15 md:grid-cols-2">
              {additionalProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`border-b border-white/15 py-7 md:px-7 ${index === 0 ? 'md:border-r' : ''}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase text-[#ff2442]">{project.type}</span>
                    <span className="font-mono text-xs text-zinc-600">0{index + projects.length + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{project.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && selectedAsset && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-image-title"
        >
          <div
            className="w-full max-w-6xl overflow-hidden rounded-[4px] border border-white/15 bg-[#0b0b0b] shadow-2xl"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex min-h-16 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-6">
              <div className="min-w-0">
                <p id="project-image-title" className="truncate text-sm font-bold">
                  {selectedProject.title}
                </p>
                <p className="truncate text-xs text-zinc-500">{selectedAsset.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-2xl text-zinc-300 transition hover:border-[#f20d2f] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                aria-label="Cerrar imagen"
                title="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="flex min-h-[280px] items-center justify-center bg-black p-2 sm:min-h-[420px] sm:p-4">
              <img
                src={selectedAsset.src}
                alt={selectedAsset.alt}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-white sm:px-6">
              <p className="font-mono text-xs text-zinc-500">
                0{selectedImage.imageIndex + 1} / 0{selectedProject.images.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => moveImage(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-lg transition hover:border-[#f20d2f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                  aria-label="Imagen anterior"
                  title="Anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveImage(1)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-lg transition hover:border-[#f20d2f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                  aria-label="Imagen siguiente"
                  title="Siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
