import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  const phoneNumber = "59177042436"; // Assuming Bolivia country code based on Spanish/number format, adjust if needed.
  const message = encodeURIComponent("Hola Daviko, estoy interesado en una cotización para un sistema de seguridad.");
  
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-2 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDuration: '2s' }}></div>
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20"></div>
    </motion.a>
  );
}
