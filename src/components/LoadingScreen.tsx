import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Futuristic Grid Background */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          
          {/* Scanning Line */}
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-accent/30 blur-sm z-10"
          />

          <div className="relative z-20 flex flex-col items-center">
            {/* Central Hexagon/Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-12"
            >
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-accent/40 rounded-full"
              />
              
              {/* Inner Core */}
              <div className="absolute inset-8 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl md:text-6xl font-bold text-accent tracking-tighter"
                >
                  BM
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Text & Progress */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-accent uppercase mb-4"
              >
                System Initializing... {Math.round(progress)}%
              </motion.div>
              
              {/* Progress Bar Container */}
              <div className="w-48 md:w-64 h-[2px] bg-foreground/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]"
                />
              </div>
            </div>

            {/* Status Messages */}
            <div className="mt-8 font-mono text-[8px] md:text-[10px] text-foreground/30 flex flex-col gap-1 items-center">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                {">"} ESTABLISHING NEURAL LINK
              </motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}>
                {">"} LOADING AI CORE MODULES
              </motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 1, repeat: Infinity }}>
                {">"} OPTIMIZING INTERFACE ARCHITECTURE
              </motion.span>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-accent/20" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-accent/20" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-accent/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-accent/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
