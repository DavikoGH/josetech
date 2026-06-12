import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

import camara1 from '../assets/images/camara_1.jpg';
import camara2 from '../assets/images/camara_2.jpg';
import camara3 from '../assets/images/camara_3.jpg';
import camara4 from '../assets/images/camara_4.jpg';
import camara5 from '../assets/images/camara_5.jpg';
import camara6 from '../assets/images/camara_6.jpg';
import camara7 from '../assets/images/camara_7.jpg';
import camara8 from '../assets/images/camara_8.jpg';
import portones1 from '../assets/images/portones_1.jpg';
import portones2 from '../assets/images/portones_2.jpg';
import portones3 from '../assets/images/portones_3.jpg';
import portones4 from '../assets/images/portones_4.jpg';

const GALLERY = [
  { id: 1, src: camara1, alt: "Instalación en Oficinas", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: portones1, alt: "Automatización de Portones", span: "col-span-1 row-span-1" },
  { id: 3, src: camara2, alt: "Domicilio Particular", span: "col-span-1 row-span-1" },
  { id: 4, src: camara3, alt: "Condominios", span: "col-span-1 row-span-2" },
  { id: 5, src: camara4, alt: "Cámara Exterior", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 6, src: portones2, alt: "Sistemas Corredizos", span: "col-span-1 row-span-1" },
  { id: 7, src: camara5, alt: "Seguridad Industrial", span: "col-span-1 row-span-1" },
  { id: 8, src: camara6, alt: "Áreas Recreativas", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 9, src: portones3, alt: "Control de Acceso", span: "col-span-1 row-span-1" },
  { id: 10, src: camara7, alt: "Monitoreo Comercial", span: "col-span-1 row-span-1" },
  { id: 11, src: camara8, alt: "Sistemas de Alarmas", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 12, src: portones4, alt: "Portones Vehiculares", span: "col-span-1 md:col-span-2 row-span-1" }
];

const CLIENTS = [
  "Hiller Electric", "Ferretería Stanley", "Hotel Cordial", 
  "Condominio Los Portales", "Familia Padilla", 
  "Restaurant El Buen Gusto", "Piscina Don Juan Pablo", "Lavadero Car Wash"
];

export function Clients() {
  return (
    <section id="clientes" className="py-24 bg-brand-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-semibold tracking-widest text-sm uppercase mb-2">Confianza</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Proyectos Realizados</h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6 rounded-full opacity-70"></div>
        </motion.div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] grid-flow-dense mb-24">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="text-white w-6 h-6 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100" />
                <span className="text-white font-medium tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Endless Logo Carousel */}
        <div className="mt-10 overflow-hidden relative py-10 border-y border-white/5 bg-[#0a0a0a]">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          
          <div className="carousel-track">
            {/* Double the array for seamless endless scrolling */}
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div key={i} className="carousel-logo w-[250px] flex-shrink-0 flex items-center justify-center px-4">
                <span className="text-xl font-display font-bold text-white/70 uppercase tracking-widest text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
