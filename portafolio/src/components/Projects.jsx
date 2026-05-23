import Folder from '../components/reactBits/Folder';
import agenda1 from '../assets/img/agenda1.png';
import agenda2 from '../assets/img/agenda2.png';
import agenda3 from '../assets/img/agenda3.png';
import codrify1 from '../assets/img/codrify1.png';
import codrify2 from '../assets/img/codrify2.png';
import codrify3 from '../assets/img/codrify3.png';
import farmaclinic1 from '../assets/img/farmaclinic.jpeg';
import farmaclinic2 from '../assets/img/farmaclinic2.jpeg';
import farmaclinic3 from '../assets/img/farmaclinic3.jpeg';
import intranet1 from '../assets/img/intranet.png';
import intranet2 from '../assets/img/intranet2.png';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-14">
          Proyectos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* CARD 1 */}
          <div className="group flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-300">

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
            <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-violet-500 mx-auto mb-4"></div>
              <h4 className="font-bold">SISTEMA AGENDA</h4>
              <p className="text-sm text-gray-600 mt-2">
                Plataforma web para gestionar reservas, usuarios y disponibilidad en tiempo real, reduciendo errores operativos y mejorando la experiencia del cliente final.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-300">

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
            <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-blue-500 mx-auto mb-4"></div>
              <h4 className="font-bold">PAGINA WEB CODRIFY</h4>
              <p className="text-sm text-gray-600 mt-2">
                Sitio corporativo orientado a conversion, disenado para comunicar valor de marca, captar leads calificados y reforzar la presencia digital del negocio.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-300">

              <Folder
                size={2.5}
                color="#5227FF"
                items={[
                  { id: 1, image: farmaclinic1, alt: 'Dashboard de farmacovigilancia' },
                  { id: 2, image: farmaclinic2, alt: 'Registro y seguimiento de pacientes' },
                  { id: 3, image: farmaclinic3, alt: 'Control y trazabilidad de eventos adversos' }
                ]}
              />
            </div>
            <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-emerald-500 mx-auto mb-4"></div>
              <h4 className="font-bold">FARMACLINIC</h4>
              <p className="text-sm text-gray-600 mt-2">
                Sistema hospitalario para gestion y control de farmacovigilancia que centraliza reportes, mejora la trazabilidad clinica y fortalece la seguridad del paciente.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group flex flex-col items-center gap-6">
            <div className="relative w-full h-[320px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-300">

              <Folder
                size={2.5}
                color="#5227FF"
                items={[
                  { id: 1, image: intranet1, alt: 'Inicio de IntranetHAQ' },
                  { id: 2, image: intranet2, alt: 'Modulos internos para personal hospitalario' },
                  { id: 3, image: intranet1, alt: 'Accesos y comunicacion institucional' }
                ]}
              />
            </div>
            <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-amber-500 mx-auto mb-4"></div>
              <h4 className="font-bold">INTRANETHAQ</h4>
              <p className="text-sm text-gray-600 mt-2">
                Sistema de intranet para hospital que integra comunicacion interna, accesos por rol y procesos administrativos, aumentando la eficiencia de los equipos de salud.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16">
          <h4 className="text-2xl font-bold text-center mb-8">OTROS PROYECTOS</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white p-6 rounded-2xl shadow-sm text-left border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-violet-500 mb-4"></div>
              <h5 className="font-bold text-lg">WHATICKET</h5>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Plataforma de control de sesiones de WhatsApp para empresas que mejora la trazabilidad de conversaciones y la calidad de atencion. Cada mensaje enviado por el equipo muestra el nombre del usuario responsable, permitiendo seguimiento claro por agente, mayor control operativo y una experiencia mas profesional para el cliente.
              </p>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm text-left border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-blue-500 mb-4"></div>
              <h5 className="font-bold text-lg">SIRRGEN</h5>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Agenda clinica integral que combina gestion de pacientes, historia clinica y pagina web institucional en una sola solucion. Incluye portal para pacientes donde pueden consultar su historial de citas, lo que reduce carga administrativa, mejora la comunicacion y eleva la percepcion de servicio de la clinica.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
