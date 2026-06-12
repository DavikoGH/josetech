import { motion } from 'motion/react';
import { Camera, ShieldAlert, DoorOpen, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    icon: Camera,
    title: "CCTV / CÁMARAS",
    description: "Sistemas de videovigilancia de alta definición con acceso remoto.",
    features: ["Instalación profesional", "Monitoreo remoto 24/7", "Configuración móvil", "DVR/NVR & IP", "Mantenimiento preventivo"],
    delay: 0.1
  },
  {
    id: 2,
    icon: ShieldAlert,
    title: "SISTEMAS DE ALARMAS",
    description: "Protección inteligente contra intrusos con alertas instantáneas.",
    features: ["Sensores de movimiento", "Alarmas residenciales", "Para negocios", "Configuración inteligente", "Integración móvil"],
    delay: 0.3
  },
  {
    id: 3,
    icon: DoorOpen,
    title: "PORTONES ELÉCTRICOS",
    description: "Automatización y control de accesos vehiculares y peatonales.",
    features: ["Instalación de motores", "Automatización", "Sistemas corredizos", "Reparación y ajuste", "Control remoto"],
    delay: 0.5
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-semibold tracking-widest text-sm uppercase mb-2">Nuestro Trabajo</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Servicios Especializados</h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6 rounded-full opacity-70"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Neon Glow background behind icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-brand-blue/20 blur-2xl rounded-full group-hover:bg-brand-blue/40 transition-colors"></div>
                
                <Icon className="w-12 h-12 text-brand-blue mb-6 relative z-10" strokeWidth={1.5} />
                
                <h4 className="text-xl font-bold mb-3 tracking-wide">{service.title}</h4>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed hidden sm:block">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand-blue mr-2 mt-0.5 opacity-80 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Decorative border bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
