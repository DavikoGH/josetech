import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/AlfredoChuquimia2.jpg';

const TYPING_TEXTS = [
  "Cámaras de Seguridad",
  "Sistemas de Alarmas",
  "Portones Eléctricos"
];

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPING_TEXTS[textIndex];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="inicio" className="relative w-full h-[150vh] md:h-[200vh]">
      {/* Background Image that covers the entire scrolling height */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Daviko Durán Profesional" 
          className="w-full h-full object-cover object-top filter brightness-75"
        />
        {/* Gradient overlays to ensure text readability across the entire scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/90 via-brand-darker/50 to-brand-darker" />
      </div>
      
      {/* Sticky Content Wrapper (Pinned to screen while scrolling) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-semibold tracking-widest text-sm md:text-base mb-4 uppercase">
              Instalación Profesional
            </h2>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-2 text-white drop-shadow-lg">
              Daviko Durán
            </h1>
            
            <div className="h-12 md:h-16 mt-4 mb-6 flex items-center justify-center">
              <span className="text-2xl md:text-4xl text-gray-300 font-light tracking-wide drop-shadow-md">
                Especialista en <span className="text-brand-blue font-medium text-glow">{displayText}</span>
                <span className="animate-pulse border-r-2 border-brand-blue ml-1 inline-block h-8 md:h-10 align-middle"></span>
              </span>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed drop-shadow-md"
            >
              Protegemos lo que más importa con tecnología de seguridad moderna, instalaciones profesionales y soluciones inteligentes para hogares y negocios.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-blue text-white rounded-full font-medium transition-all duration-300 hover:bg-brand-blue hover:box-glow overflow-hidden relative group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">CONSULTAR AHORA</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase drop-shadow-md">Bajar para ver más</span>
          <ChevronDown className="text-brand-blue w-5 h-5 opacity-90" />
        </motion.div>
      </div>
    </section>
  );
}
