import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { Sun, Moon, Briefcase, Wrench, FolderKanban, Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Animate background opacity and blur based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      isLight ? "rgba(255, 255, 255, 0)" : "rgba(10, 10, 10, 0)",
      isLight ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 10, 0.8)"
    ]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    [
      isLight ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
    ]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    [
      isLight ? "rgba(5, 5, 5, 0.6)" : "rgba(255, 255, 255, 0.6)",
      isLight ? "rgba(5, 5, 5, 1)" : "rgba(255, 255, 255, 1)"
    ]
  );

  const navItems = [
    { name: t.nav.experience, href: "#experience", icon: Briefcase },
    { name: t.nav.skills, href: "#skills", icon: Wrench },
    { name: t.nav.projects, href: "#projects", icon: FolderKanban },
    { name: t.nav.ai, href: "#ai", icon: Sparkles },
    { name: t.nav.contact, href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0 pointer-events-none"
    >
      <motion.div 
        style={{ backgroundColor, borderColor, color: textColor }}
        className="flex items-center gap-1 p-1 rounded-b-2xl md:rounded-full backdrop-blur-xl border-x border-b md:border pointer-events-auto max-w-full md:max-w-[95vw] w-full md:w-auto"
      >
        <div className="flex items-center gap-1 min-w-max px-2 w-full md:w-auto justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "p-2 md:px-4 md:py-2 transition-colors rounded-full hover:bg-foreground/10 flex items-center gap-2 group relative"
              )}
              style={{ color: "inherit" }}
              title={item.name}
            >
              <item.icon size={18} className="md:hidden" />
              <span className="text-sm font-medium hidden md:inline">{item.name}</span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden whitespace-nowrap">
                {item.name}
              </span>
            </a>
          ))}
          <div className="w-px h-4 mx-1 md:mx-2 bg-border shrink-0" />
          
          <LanguageSelector />
          
          <div className="w-px h-4 mx-1 md:mx-2 bg-border shrink-0" />
          
          <button
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-full transition-colors hover:bg-foreground/10 shrink-0"
            style={{ color: "inherit" }}
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
