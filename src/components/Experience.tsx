import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="sticky top-32 z-10 bg-background py-4 -mx-4 px-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
              {t.experience.title1} <br />
              <span className="text-accent">{t.experience.title2}</span>
            </h2>
          </div>
          <p className="mt-4 text-foreground/40 text-sm md:text-base">
            {t.experience.description}
          </p>

          {/* Creative Fun Fact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-3xl p-6 border-accent/20 hidden md:block"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-accent/10 mb-4">
              <img 
                src="src/images/bhaumik_coffee.png" 
                alt="Creative Workspace"
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{t.experience.funFactTitle}</p>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {t.experience.funFactDescription}
            </p>
          </motion.div>
        </div>
        
        <div className="md:w-2/3 space-y-12">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l border-foreground/10"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent group-hover:scale-150 transition-transform" />
              <span className="text-xs font-mono text-accent/60 uppercase tracking-widest">{exp.period}</span>
              <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
              <p className="text-foreground/80 font-medium">{exp.company}</p>
              <p className="mt-4 text-foreground/50 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
