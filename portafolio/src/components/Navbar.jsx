import StaggeredMenu from './reactBits/StaggeredMenu';
import milogo from '../assets/logos/logo.png';

export default function Navbar() {
  // Mapeamos tus enlaces originales al formato que requiere StaggeredMenu
  const menuItems = [
    { label: 'Inicio', ariaLabel: 'Ir a inicio', link: '#home' },
    { label: 'Sobre mí', ariaLabel: 'Ir a sobre mí', link: '#about' },
    { label: 'Proyectos', ariaLabel: 'Ir a proyectos', link: '#projects' },
    { label: 'Tecnologías', ariaLabel: 'Ir a tecnologías', link: '#tech' },
    { label: 'Habilidades', ariaLabel: 'Ir a habilidades', link: '#skills' },
    { label: 'Contacto', ariaLabel: 'Ir a contacto', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/xThunderking' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/silvestre-ignacio-reyna-rayo-01403b334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { label: 'CV', link: 'https://drive.google.com/file/d/1jTpmY4fkbJ9yqddE0TldSMHXP7qBLWsE/view?usp=sharing' }
  ];

  return (
    /* Usamos 'fixed' para que el botón del menú siempre esté visible al hacer scroll */
    <nav className="fixed inset-0 z-[9999] pointer-events-none">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#000000ff"
        openMenuButtonColor="#000000ff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']} // Degradado de morados
        logoUrl={milogo} // Asegúrate de tener un logo en tu carpeta public
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log('Menú abierto')}
        onMenuClose={() => console.log('Menú cerrado')}
      />
    </nav>
  );
}