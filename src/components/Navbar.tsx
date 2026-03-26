import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";
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
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.ai, href: "#ai" },
    { name: t.nav.contact, href: "#contact" },
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <motion.div 
        style={{ backgroundColor, borderColor, color: textColor }}
        className="flex items-center gap-1 p-1 rounded-full backdrop-blur-xl border pointer-events-auto max-w-[95vw]"
      >
        <div className="flex items-center gap-1 min-w-max px-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 md:px-4 py-2 text-[10px] md:text-sm font-medium transition-colors rounded-full hover:bg-foreground/10"
              )}
              style={{ color: "inherit" }}
            >
              {item.name}
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
            {isLight ? <Moon size={16} className="md:w-[18px] md:h-[18px]" /> : <Sun size={16} className="md:w-[18px] md:h-[18px]" />}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
