export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Proyectos</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-bold">Sistema POS</h4>
            <p className="text-sm text-gray-600 mt-2">
              Sistema de ventas con React y Node
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
