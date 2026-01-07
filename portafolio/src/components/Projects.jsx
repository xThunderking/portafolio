import Folder from '../components/reactBits/Folder';
import agenda1 from '../assets/img/agenda1.png';
import agenda2 from '../assets/img/agenda2.png';
import agenda3 from '../assets/img/agenda3.png';
import codrify1 from '../assets/img/codrify1.png';
import codrify2 from '../assets/img/codrify2.png';
import codrify3 from '../assets/img/codrify3.png';
import org1 from '../assets/img/org1.png';
import org2 from '../assets/img/org2.png';
import org3 from '../assets/img/org3.png';

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
                  { id: 1, image: agenda1, alt: 'Pagina principal administrador' },
                  { id: 2, image: agenda2, alt: 'Modulo de reservas de aulas' },
                  { id: 3, image: agenda3, alt: 'Pagina principal usuario' }
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
                  { id: 1, image: codrify1, alt: 'Pagina principal codrify' },
                  { id: 2, image: codrify2, alt: 'Modulo de contacto' },
                  { id: 3, image: codrify3, alt: 'Pagina de empresas' }
                ]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h4 className="font-bold">PAGINA WEB CODRIFY</h4>
              <p className="text-sm text-gray-600 mt-2">
                Landing page corporativa
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
                  { id: 1, image: org1, alt: 'Pagina principal tipo navegador' },
                  { id: 2, image: org2, alt: 'Modulo de claves' },
                  { id: 3, image: org3, alt: 'Pagina despues de buscar' }
                ]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h4 className="font-bold">ORGANIZADOR</h4>
              <p className="text-sm text-gray-600 mt-2">
                Sistema oranizador tipo navegador
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
