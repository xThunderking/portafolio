export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Contacto</h3>
        <p className="text-gray-600 mb-12">
          ¿Quieres trabajar conmigo? Contáctame por cualquiera de estos medios.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/7551427515"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border hover:border-green-500 transition shadow hover:shadow-xl"
          >
            <svg
              className="w-12 h-12 mb-4 text-green-500 group-hover:scale-110 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .02 5.36.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.94 11.94 0 005.82 1.48h.01c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.21-3.5-8.39z" />
            </svg>
            <h4 className="font-semibold text-lg">WhatsApp</h4>
            <p className="text-sm text-gray-500">Respuesta rápida</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/silvestre-ignacio-reyna-rayo-01403b334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border hover:border-blue-600 transition shadow hover:shadow-xl"
          >
            <svg
              className="w-12 h-12 mb-4 text-blue-600 group-hover:scale-110 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.43c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07s2.05.93 2.05 2.07c0 1.14-.92 2.07-2.05 2.07zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.38V9h3.39v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.21 2.34 4.21 5.38v6.37z" />
            </svg>
            <h4 className="font-semibold text-lg">LinkedIn</h4>
            <p className="text-sm text-gray-500">Conecta profesionalmente</p>
          </a>

          {/* Correo */}
          <a
            href="mailto:ignacioreyarayo25@gmail.com"
            className="group flex flex-col items-center justify-center p-6 rounded-2xl border hover:border-red-500 transition shadow hover:shadow-xl"
          >
            <svg
              className="w-12 h-12 mb-4 text-red-500 group-hover:scale-110 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065L.015 6.3A1.5 1.5 0 011.5 5.01h21a1.5 1.5 0 011.485 1.29L12 13.065z" />
              <path d="M12 15.435L0 8.4V18a1.5 1.5 0 001.5 1.5h21A1.5 1.5 0 0024 18V8.4l-12 7.035z" />
            </svg>
            <h4 className="font-semibold text-lg">Correo</h4>
            <p className="text-sm text-gray-500">ignacioreyarayo25@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  )
}
