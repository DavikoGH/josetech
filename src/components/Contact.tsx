import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensaje enviado profesionalmente. Nos comunicaremos pronto.');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-blue font-semibold tracking-widest text-sm uppercase mb-2">Comunícate</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Solicita una Cotización</h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6 rounded-full opacity-70"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold mb-4 font-display">Asesoría Técnica Experta</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Estamos listos para evaluar tus necesidades de seguridad. Contáctanos para agendar una visita técnica o resolver cualquier duda sobre nuestros sistemas de CCTV, alarmas o portones.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mr-4 border border-brand-blue/20">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">WhatsApp / Teléfono</p>
                  <p className="text-white text-lg font-mono">77042436</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mr-4 border border-brand-blue/20">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Correo Electrónico</p>
                  <p className="text-white text-lg">contacto@josetech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mr-4 border border-brand-blue/20">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Horario de Atención</p>
                  <p className="text-white text-lg">Lun - Sáb, 08:00 AM - 18:00 PM</p>
                  <p className="text-xs text-brand-blue mt-1">Soporte técnico 24/7 para clientes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mr-4 border border-brand-blue/20">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider mb-1 uppercase">Oficina</p>
                  <p className="text-white text-lg">Calle Taracoé # 100</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-2xl"
          >
            <h4 className="text-xl font-bold mb-6 font-display">Envía un Mensaje</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nombre Completo</label>
                  <input type="text" id="name" required placeholder="Nombre Completo" className="input-field" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Teléfono / Celular</label>
                  <input type="tel" id="phone" required placeholder="Teléfono / Celular" className="input-field" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Correo Electrónico (Opcional)</label>
                <input type="email" id="email" placeholder="Correo Electrónico (Opcional)" className="input-field" />
              </div>
              
              <div>
                <label htmlFor="service" className="sr-only">Servicio de Interés</label>
                <select id="service" required defaultValue="" className="input-field appearance-none bg-brand-darker">
                  <option value="" disabled hidden>Selecciona un servicio</option>
                  <option value="cctv">Cámaras de Seguridad (CCTV)</option>
                  <option value="alarms">Sistemas de Alarmas</option>
                  <option value="gates">Portones Eléctricos</option>
                  <option value="other">Otro / Consultoría</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Mensaje adicional</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  placeholder="Cuéntanos un poco sobre lo que necesitas proteger..." 
                  className="input-field resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-blue text-white rounded-lg font-medium flex items-center justify-center transition-all hover:bg-blue-600 box-glow mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> ENVIAR SOLICITUD
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
