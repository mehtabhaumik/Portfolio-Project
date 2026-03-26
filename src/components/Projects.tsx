import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  
  const projectLinks = [
    {
      github: "https://github.com/mehtabhaumik/Tampa-Taste-CRM-Project",
      live: "https://tampa-taste-crm-776448975918.us-west1.run.app/",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    },
    {
      github: "https://github.com/mehtabhaumik/Real-Estate-Website-Project",
      live: "https://riverview-realty-634365838426.us-west1.run.app/",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 md:mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            {t.projects.title1} <br />
            <span className="text-accent">{t.projects.title2}</span>
          </h2>
          <p className="text-foreground/40 mt-4 text-sm md:text-base">
            {t.projects.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {t.projects.items.map((project, index) => {
          const links = projectLinks[index % projectLinks.length];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-[32px] glass mb-8">
                <img
                  src={links.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <a 
                    href={links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-[10px] font-mono border border-foreground/10 rounded-full text-foreground/40 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="mt-4 text-foreground/50 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border-accent/20">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <p className="text-sm md:text-base font-medium text-foreground/60">
            {t.projects.stayTuned} <span className="text-accent font-mono ml-1 uppercase tracking-widest text-xs">{t.projects.stayTunedTag}</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
