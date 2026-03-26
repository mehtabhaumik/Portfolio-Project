import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

export function GreetingAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] group">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-48 h-48 md:w-64 md:h-64 glass rounded-2xl md:rounded-3xl overflow-hidden border border-accent/30 shadow-2xl"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-2 right-2 md:top-3 md:right-3 p-1 rounded-full bg-background/50 hover:bg-accent hover:text-background transition-colors z-10"
            >
              <X size={14} className="md:w-4 md:h-4" />
            </button>
            <img 
              src="src/images/bhaumik_hi.png" 
              alt="Bhaumik Greeting"
              className="w-full h-full object-cover bg-accent/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Speech Bubble */}
      {!isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-16 md:right-20 bottom-3 md:bottom-4 px-3 md:px-4 py-1.5 md:py-2 glass rounded-xl md:rounded-2xl border border-accent/30 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
        >
          <p className="text-[10px] md:text-xs font-mono text-accent uppercase tracking-widest">Say Hi!</p>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 md:w-16 md:h-16 rounded-full glass border border-accent/30 flex items-center justify-center overflow-hidden group shadow-lg"
      >
        <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
        <img 
          src="src/images/bhaumik_hi.png" 
          alt="Avatar"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover relative z-10 border border-accent/20 bg-background"
          referrerPolicy="no-referrer"
        />
        
        {/* Animated Ring */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-accent/30"
        />
      </motion.button>
    </div>
  );
}
