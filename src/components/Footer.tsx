import { ShieldCheck, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-brand-blue w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-wider">JOSE<span className="text-brand-blue">TECH</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Especialistas en seguridad electrónica e instalación profesional. Protegiendo tu tranquilidad con tecnología de vanguardia y servicio técnico garantizado.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Servicios Especializados</a></li>
              <li><a href="#clientes" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Nuestros Proyectos</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Servicios</h4>
            <ul className="space-y-3 flex flex-col">
              <span className="text-gray-400 text-sm hover:text-white transition cursor-default">Cámaras de Seguridad</span>
              <span className="text-gray-400 text-sm hover:text-white transition cursor-default">Mantenimiento de DVR</span>
              <span className="text-gray-400 text-sm hover:text-white transition cursor-default">Instalación de Alarmas</span>
              <span className="text-gray-400 text-sm hover:text-white transition cursor-default">Automatización de Portones</span>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs tracking-wider mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JOSETECH - DAVIKO DURÁN. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue group transition-colors"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
