import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Zap, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../LanguageContext";

export function AIFocus() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.ai.activities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.ai.activities.length]);

  const icons = [Terminal, Zap, Sparkles];

  return (
    <section id="ai" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono border rounded-full border-purple-500/30 bg-purple-500/5 text-purple-400">
              <Bot size={12} />
              <span>{t.ai.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              {t.ai.title1} <br />
              <span className="text-purple-400">{t.ai.title2}</span>
            </h2>
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed mb-8">
              {t.ai.description}
            </p>
            
            <div className="space-y-6">
              {t.ai.focusItems.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass flex items-center justify-center text-purple-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-foreground/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-accent/20 animate-pulse" />
              <div className="relative z-10 text-center p-12 w-full">
                <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-foreground/20">
                  <Sparkles size={48} className="text-accent" />
                </div>
                <p className="font-mono text-sm text-foreground/60 mb-6 tracking-widest uppercase">{t.ai.status}</p>
                <div className="h-24 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-2xl font-bold italic leading-tight"
                    >
                      "{t.ai.activities[currentIndex]}"
                    </motion.p>
                  </AnimatePresence>
                </div>
                
                <div className="mt-8 flex justify-center gap-2">
                  {t.ai.activities.map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        i === currentIndex ? "w-8 bg-accent" : "w-2 bg-foreground/10"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
