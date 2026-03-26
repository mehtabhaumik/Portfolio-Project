import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-foreground/40 text-sm md:text-base">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 glass rounded-3xl group hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="font-bold text-lg">{skill.name}</span>
                <span className="text-xs font-mono text-accent">{skill.level}%</span>
              </div>
              <div className="h-1 w-full bg-foreground/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
