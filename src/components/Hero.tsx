import { motion, useScroll, useTransform } from "motion/react";
import { Brain, Cpu, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const gridY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
      {/* Background Grid */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      {/* Background Glows */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" 
      />
      
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono border rounded-full border-accent/30 bg-accent/5 text-accent">
          <Sparkles size={12} />
          <span>{t.hero.badge}</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight md:text-8xl lg:text-9xl tracking-tightest">
          <span className="text-[10px] sm:text-sm md:text-base block mb-4 sm:mb-6 text-foreground/40 font-mono font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase">{t.hero.subtitle}</span>
          {t.hero.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground/50">
            {t.hero.title2}
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-6 sm:mt-8 text-base sm:text-lg text-foreground/50 md:text-xl px-4 sm:px-0">
          {t.hero.description}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl">
          <Brain className="text-accent" size={20} />
          <span className="text-sm font-medium">{t.hero.aiIntegration}</span>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl">
          <Cpu className="text-accent" size={20} />
          <span className="text-sm font-medium">{t.hero.architecture}</span>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 glass rounded-2xl">
          <Sparkles className="text-accent" size={20} />
          <span className="text-sm font-medium">{t.hero.uxInnovation}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
