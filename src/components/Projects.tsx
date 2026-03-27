import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../LanguageContext";
import { useState } from "react";

export function Projects() {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const projectLinks = [
    {
      github: "https://github.com/mehtabhaumik/Tampa-Taste-CRM-Project",
      live: "https://tampa-taste-crm-776448975918.us-west1.run.app/",
      image: "https://api.microlink.io?url=https://tampa-taste-crm-776448975918.us-west1.run.app/&screenshot=true&meta=false&embed=screenshot.url",
      fallback: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    },
    {
      github: "https://github.com/mehtabhaumik/Real-Estate-Website-Project",
      live: "https://riverview-realty-634365838426.us-west1.run.app/",
      image: "https://api.microlink.io?url=https://riverview-realty-634365838426.us-west1.run.app/&screenshot=true&meta=false&embed=screenshot.url",
      fallback: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10 md:mb-20">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {t.projects.items.map((project, index) => {
          const links = projectLinks[index % projectLinks.length];
          const hasError = imageErrors[index];
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-[24px] md:rounded-[32px] glass mb-6 md:mb-8 bg-surface/50 border border-foreground/5 shadow-2xl">
                {/* Browser Header Mockup */}
                <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-surface/80 backdrop-blur-md border-b border-foreground/5 flex items-center px-3 md:px-4 gap-1.5 md:gap-2 z-20">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/40" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/40" />
                  <div className="ml-2 md:ml-4 h-3 md:h-4 w-24 md:w-32 bg-foreground/5 rounded-full" />
                </div>

                <div className="w-full h-full pt-6 md:pt-8">
                  <img
                    src={hasError ? links.fallback : links.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02]",
                      !hasError && "opacity-95 group-hover:opacity-100"
                    )}
                    referrerPolicy="no-referrer"
                    onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                  />
                </div>
                {/* Overlay with buttons - always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/60 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 md:gap-6">
                  <a 
                    href={links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} className="md:w-7 md:h-7" />
                  </a>
                  <a 
                    href={links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl"
                    title="GitHub Repo"
                  >
                    <Github size={20} className="md:w-7 md:h-7" />
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
              
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="mt-3 md:mt-4 text-foreground/50 leading-relaxed text-sm md:text-base">
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
