import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-darker"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <ShieldCheck className="w-16 h-16 text-brand-blue absolute top-0 left-0 blur-md opacity-50 animate-pulse" />
            <ShieldCheck className="w-16 h-16 text-brand-blue relative z-10" strokeWidth={1.5} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-display font-bold tracking-[0.3em] text-white/80"
          >
            DAVIKO<span className="text-brand-blue">TECH</span>
          </motion.div>

          <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-1/2 h-full bg-brand-blue rounded-full shadow-[0_0_10px_#007BFF]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
