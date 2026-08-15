const technologies = [
  'React',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Next.js',
  'Node.js',
  'Express',
  'NestJS',
  'PHP',
  'Laravel',
  'Python',
  'FastAPI',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'SQLite',
  'Redis',
  'Firebase',
  'AWS S3',
  'AWS EC2',
  'AWS Lambda',
  'Supabase',
  'Cloudflare',
  'Inteligencia Artificial',
  'Chatbots',
  'Automatización',
  'APIs REST',
  'Linux',
  'Git',
  'GitHub',
  'Docker',
  'Docker Compose',
  'Nginx',
  'Vite',
  'Prisma',
  'JWT',
  'GitHub Actions',
  'CI/CD',
]

const midpoint = Math.ceil(technologies.length / 2)
const technologyRows = [technologies.slice(0, midpoint), technologies.slice(midpoint)]

export default function Technologies() {
  return (
    <section id="tech" className="overflow-hidden border-t border-white/10 bg-[#080808] py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-[#ff2442]">Stack / 03</p>
            <h2 className="text-4xl font-black md:text-5xl">Herramientas de trabajo.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-400 lg:justify-self-end">
            Tecnologías para construir productos web escalables, seguros y listos para producción.
          </p>
        </div>
      </div>

      <div className="space-y-3 border-y border-white/10 py-6">
        {technologyRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`tech-track flex w-max gap-3 whitespace-nowrap px-3 ${rowIndex === 0 ? 'tech-track-forward' : 'tech-track-reverse'}`}
          >
            {[...row, ...row].map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="inline-flex h-12 items-center border border-white/15 bg-[#111] px-5 text-sm font-semibold text-zinc-300 transition hover:border-[#f20d2f] hover:text-white"
              >
                <span className="mr-3 h-1.5 w-1.5 bg-[#f20d2f]" aria-hidden="true" />
                {technology}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
