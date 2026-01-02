export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Silvestre</h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#about" className="hover:text-blue-600">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
          <li><a href="#tech" className="hover:text-blue-600">Tecnologías</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
