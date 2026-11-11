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
import registro1 from '../assets/img/registro1.png'
import registro2 from '../assets/img/registro2.png'
import registro3 from '../assets/img/registro3.png'

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
    title: 'Registro de Invitados',
    type: 'Gestión de eventos',
    summary: 'Aplicación web para organizar la lista de invitados y agilizar el registro de llegada en eventos, con una experiencia sencilla tanto para asistentes como para el equipo organizador.',
    impact: 'Permite encontrar invitados por nombre, confirmar su asistencia al instante y seguir el avance del evento con estadísticas en tiempo real y exportación a Excel.',
    stack: ['Búsqueda de invitados', 'Registro de asistencia', 'Estadísticas', 'Exportación a Excel'],
    images: [
      { src: registro1, alt: 'Pantalla de bienvenida para buscar invitados y registrar su llegada al evento' },
      { src: registro2, alt: 'Confirmación visual de asistencia después del registro del invitado' },
      { src: registro3, alt: 'Estadísticas de invitados, asistencias confirmadas y pendientes' },
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
    images: [
      { src: fermont1, alt: 'Panel móvil principal del sistema Fermont' },
      { src: fermont2, alt: 'Gestión de valoraciones pendientes en Fermont' },
      { src: fermont3, alt: 'Mapa facial interactivo de Fermont' },
    ],
  },
  {
    title: 'Whaticket',
    type: 'Mensajería empresarial',
    summary: 'Plataforma para controlar sesiones de WhatsApp e identificar al responsable de cada mensaje, con trazabilidad por agente.',
    impact: 'Ayuda a supervisar las conversaciones y dar seguimiento a la atención de cada agente.',
    stack: ['WhatsApp', 'Sesiones', 'Agentes', 'Trazabilidad'],
    images: [],
  },
  {
    title: 'SIRRGEN',
    type: 'Gestión clínica',
    summary: 'Agenda clínica integral con pacientes, historia médica, sitio institucional y un portal para consultar el historial de citas.',
    impact: 'Integra la agenda y la información clínica, además de facilitar a los pacientes la consulta de sus citas.',
    stack: ['Agenda clínica', 'Pacientes', 'Historia médica', 'Portal de citas'],
    images: [],
  },
  {
    title: 'HAQPOS',
    type: 'Punto de venta e inventario',
    summary: 'Sistema de punto de venta para operar tres áreas con usuarios e inventarios independientes, con la posibilidad de agregar nuevas áreas conforme crece la operación.',
    impact: 'Mantiene el control del almacén y permite registrar ventas con pago en efectivo o a crédito.',
    stack: ['Punto de venta', '3 áreas', 'Inventario por área', 'Efectivo', 'Crédito', 'Áreas ampliables'],
    images: [],
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
      <section id="projects" className="border-t border-white/10 bg-[#070707] py-14 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-7 grid gap-4 border-b border-white/15 pb-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase text-[#ff2442]">Proyectos / 01</p>
              <h2 className="text-4xl font-black text-white md:text-5xl">Proyectos que resuelven.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-400 lg:justify-self-end">
              Sistemas y experiencias digitales diseñados alrededor de cada operación: qué problema resuelven, cómo funcionan y qué aportan al negocio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, projectIndex) => (
              <article
                key={project.title}
                className="overflow-hidden border border-white/15 bg-[#101010] transition-colors hover:border-[#f20d2f]/70"
              >
                {project.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-px border-b border-white/10 bg-white/10">
                    {project.images.map((image, imageIndex) => (
                      <button
                        key={image.alt}
                        type="button"
                        onClick={() => openImage(projectIndex, imageIndex)}
                        aria-label={`Abrir ${image.alt}`}
                        className="group relative aspect-[16/9] overflow-hidden bg-black text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f20d2f]"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                          loading={projectIndex === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                        />
                        <span className="absolute bottom-1.5 left-1.5 bg-black/85 px-1.5 py-1 font-mono text-[10px] font-bold text-white backdrop-blur">
                          0{imageIndex + 1} ↗
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#ff2442]">{project.type}</span>
                    <span className="font-mono text-xs text-zinc-600">0{projectIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{project.summary}</p>
                  <div className="mt-4 border-l-2 border-[#f20d2f] pl-3">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Valor para la operación</p>
                    <p className="mt-1 text-sm leading-5 text-zinc-200">{project.impact}</p>
                  </div>
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 border-b border-[#f20d2f] pb-1 text-sm font-bold text-white transition hover:text-[#ff2442] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f20d2f]"
                    >
                      Ver repositorio <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map(item => (
                      <span
                        key={item}
                        className="border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-semibold text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
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
