import Folder from '../components/reactBits/Folder';
import agenda1 from '../assets/img/agenda1.png';
import agenda2 from '../assets/img/agenda2.png';
import agenda3 from '../assets/img/agenda3.png';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-14">
          Proyectos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-xl bg-gradient-to-br bg-gray-100">

              <Folder
                size={2.5}
                color="#5227FF"
                items={[
                  { id: 1, image: agenda1, alt: 'Ventas' },
                  { id: 2, image: agenda2, alt: 'Inventario' },
                  { id: 3, image: agenda3, alt: 'Reportes' }
                ]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h4 className="font-bold">SISTEMA AGENDA</h4>
              <p className="text-sm text-gray-600 mt-2">
                Sistema de ventas con React y Node
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-xl bg-gradient-to-br bg-gray-100">

              <Folder
                size={2.5}
                color="#5227FF"
                items={[
                  { id: 1, image: agenda1, alt: 'Ventas' },
                  { id: 2, image: agenda2, alt: 'Inventario' },
                  { id: 3, image: agenda3, alt: 'Reportes' }
                ]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h4 className="font-bold">Agenda Web</h4>
              <p className="text-sm text-gray-600 mt-2">
                Reservas múltiples con arquitectura MVC
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-xl bg-gradient-to-br bg-gray-100">

              <Folder
                size={2.5}
                color="#5227FF"
                items={[
                  { id: 1, image: agenda1, alt: 'Ventas' },
                  { id: 2, image: agenda2, alt: 'Inventario' },
                  { id: 3, image: agenda3, alt: 'Reportes' }
                ]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h4 className="font-bold">Inventarios</h4>
              <p className="text-sm text-gray-600 mt-2">
                Control de artículos y reportes
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
