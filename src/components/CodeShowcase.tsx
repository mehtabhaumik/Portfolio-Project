import { motion, AnimatePresence } from "motion/react";
import { Code2, Eye, Terminal, Cpu, Braces, Layers, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../LanguageContext";

export function CodeShowcase() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState("html-css");
  const [glassBlur, setGlassBlur] = useState(12);
  const [glassOpacity, setGlassOpacity] = useState(0.1);
  const [promptMode, setPromptMode] = useState<"basic" | "refined">("basic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCodeCollapsed, setIsCodeCollapsed] = useState(true);

  // Simulate AI generation when prompt mode changes
  const handlePromptModeChange = (mode: "basic" | "refined") => {
    setPromptMode(mode);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const snippets = [
    {
      id: "html-css",
      title: "HTML5 & CSS3",
      icon: Layers,
      language: "css",
      code: `.cyber-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.cyber-card::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: conic-gradient(
    transparent, 
    #00f2ff, 
    transparent 30%
  );
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
      demo: (
        <div className="flex items-center justify-center h-full bg-foreground/5 rounded-2xl overflow-hidden p-8">
          <div className="relative w-48 h-64 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 animate-pulse" />
            <div className="absolute inset-[2px] bg-background rounded-[14px] z-10 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                <Cpu className="text-accent" size={24} />
              </div>
              <p className="text-xs font-mono text-accent mb-1 uppercase tracking-widest">{t.showcase.neuralLink}</p>
              <p className="text-lg font-bold">CORE-01</p>
            </div>
            {/* Animated Border Simulation */}
            <div className="absolute inset-0 bg-[conic-gradient(transparent,var(--accent),transparent_30%)] animate-[spin_4s_linear_infinite]" />
          </div>
        </div>
      )
    },
    {
      id: "react-ts",
      title: "React & TypeScript",
      icon: Braces,
      language: "typescript",
      code: `interface GlassProps {
  blur: number;
  opacity: number;
}

export const GlassCard = ({ 
  blur, 
  opacity 
}: GlassProps) => {
  return (
    <div 
      className="rounded-3xl border border-white/20"
      style={{
        backdropFilter: \`blur(\${blur}px)\`,
        backgroundColor: \`rgba(255, 255, 255, \${opacity})\`
      }}
    >
      <h2 className="text-xl font-bold">Glass UI</h2>
    </div>
  );
};`,
      demo: (
        <div className="h-full bg-foreground/5 rounded-2xl p-6 flex flex-col justify-center gap-8">
          <div 
            className="w-full h-32 rounded-3xl border border-foreground/20 flex items-center justify-center relative overflow-hidden"
            style={{
              backdropFilter: `blur(${glassBlur}px)`,
              backgroundColor: `rgba(var(--foreground-rgb), ${glassOpacity})`
            }}
          >
            <div className="absolute -z-10 w-20 h-20 bg-accent/40 rounded-full blur-2xl animate-bounce" />
            <span className="text-xl font-bold tracking-widest uppercase">Glass UI</span>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                <span>{t.showcase.blurIntensity}</span>
                <span>{glassBlur}px</span>
              </div>
              <input 
                type="range" min="0" max="40" 
                value={glassBlur} 
                onChange={(e) => setGlassBlur(Number(e.target.value))}
                className="w-full accent-accent bg-foreground/5 h-1 rounded-full appearance-none cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                <span>{t.showcase.transparency}</span>
                <span>{Math.round(glassOpacity * 100)}%</span>
              </div>
              <input 
                type="range" min="0" max="0.5" step="0.01"
                value={glassOpacity} 
                onChange={(e) => setGlassOpacity(Number(e.target.value))}
                className="w-full accent-accent bg-foreground/5 h-1 rounded-full appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "prompt-eng",
      title: "Prompt Engineering",
      icon: Sparkles,
      language: "markdown",
      code: `### REFINED PROMPT TEMPLATE
Act as a Senior UI Architect. 
Create a high-fidelity React login form 
using Tailwind CSS. 

Requirements:
1. Glassmorphism aesthetic.
2. Form validation for email/password.
3. Responsive design (mobile-first).
4. Smooth entrance animations.

Output Format: 
Provide a single-file React component.`,
      demo: (
        <div className="h-full bg-foreground/5 rounded-2xl p-6 flex flex-col">
          <div className="flex gap-2 mb-6">
            <button 
              onClick={() => handlePromptModeChange("basic")}
              className={cn(
                "flex-1 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all",
                promptMode === "basic" ? "bg-accent text-background font-bold" : "bg-foreground/5 text-foreground/40"
              )}
            >
              {t.showcase.basic}
            </button>
            <button 
              onClick={() => handlePromptModeChange("refined")}
              className={cn(
                "flex-1 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all",
                promptMode === "refined" ? "bg-accent text-background font-bold" : "bg-foreground/5 text-foreground/40"
              )}
            >
              {t.showcase.refined}
            </button>
          </div>

          <div className="flex-1 font-mono text-[10px] space-y-4 overflow-hidden flex flex-col">
            <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10">
              <p className="text-foreground/20 mb-1 uppercase tracking-widest">{t.showcase.prompt}</p>
              <p className="text-foreground/60 italic leading-relaxed">
                {promptMode === "basic" 
                  ? "Create a login form." 
                  : "Act as a Senior UI Architect. Create a high-fidelity React login form using Tailwind CSS with glassmorphism..."}
              </p>
            </div>
            
            <div className="flex-1 p-4 bg-accent/5 rounded-xl border border-accent/20 overflow-hidden flex flex-col">
              <p className="text-accent mb-3 uppercase tracking-widest font-bold">{t.showcase.aiOutputPreview}</p>
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-accent animate-ping" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-foreground/10 rounded-md border border-foreground/5" />
                        <div className="h-3 w-full bg-foreground/10 rounded-md border border-foreground/5" />
                        <div className="h-6 w-full bg-accent/30 rounded-md border border-accent/20 mt-4 flex items-center justify-center">
                          <div className="w-12 h-1 bg-accent/50 rounded-full" />
                        </div>
                      </div>
                      <p className="text-[8px] text-center text-accent/40 uppercase tracking-[0.2em] animate-pulse">{t.showcase.generatingComponent}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full"
                    >
                      {promptMode === "basic" ? (
                        <div className="bg-white p-4 rounded border border-gray-300 shadow-sm text-black font-sans">
                          <h4 className="text-sm font-bold mb-3">Login</h4>
                          <input type="text" placeholder="Email" className="w-full mb-2 p-1 border text-[10px]" />
                          <input type="password" placeholder="Password" className="w-full mb-3 p-1 border text-[10px]" />
                          <button className="w-full bg-blue-500 text-white py-1 text-[10px] rounded">Submit</button>
                        </div>
                      ) : (
                        <div className="glass p-5 rounded-2xl border border-accent/30 shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
                              <Sparkles size={12} className="text-accent" />
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-widest">Secure Access</h4>
                          </div>
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="h-8 bg-foreground/5 border border-foreground/10 rounded-lg px-3 flex items-center">
                                <span className="text-[8px] text-foreground/30">Email Address</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="h-8 bg-foreground/5 border border-foreground/10 rounded-lg px-3 flex items-center">
                                <span className="text-[8px] text-foreground/30">Password</span>
                              </div>
                            </div>
                            <button className="w-full py-2 bg-accent text-background rounded-lg text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)] transition-all">
                              Authenticate
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "python-ai",
      title: "Python & AI",
      icon: Terminal,
      language: "python",
      code: `import google.generativeai as genai

def generate_ui_schema(prompt: str):
    model = genai.GenerativeModel('gemini-pro')
    
    response = model.generate_content(
        f"Generate a JSON UI schema for: {prompt}",
        generation_config={
            "response_mime_type": "application/json"
        }
    )
    
    return response.text

# Example usage
schema = generate_ui_schema("A futuristic music player")
print(schema)`,
      demo: (
        <div className="h-full bg-foreground/5 rounded-2xl p-6 font-mono text-xs overflow-hidden">
          <div className="flex items-center gap-2 mb-6 text-foreground/20">
            <Terminal size={14} />
            <span>python3 main.py</span>
          </div>
          <div className="space-y-1">
            <p className="text-green-400">{t.showcase.connectedToGemini}</p>
            <p className="text-foreground/60">{t.showcase.processingPrompt}: "Futuristic Music Player"</p>
            <p className="text-foreground/20">----------------------------------------</p>
            <p className="text-yellow-400">{`{`}</p>
            <p className="text-yellow-400 pl-4">{`"component": "PlayerContainer",`}</p>
            <p className="text-yellow-400 pl-4">{`"styles": ["glass", "blur-xl"],`}</p>
            <p className="text-yellow-400 pl-4">{`"controls": ["play", "pause", "next"],`}</p>
            <p className="text-yellow-400 pl-4">{`"visualizer": "radial-wave"`}</p>
            <p className="text-yellow-400">{`}`}</p>
            <p className="text-accent mt-4 animate-pulse">_</p>
          </div>
        </div>
      )
    }
  ];

  const activeSnippet = snippets.find(s => s.id === activeId)!;

  // Trigger generation when switching to prompt-eng tab for the first time or switching back
  useEffect(() => {
    if (activeId === "prompt-eng") {
      setIsGenerating(true);
      const timer = setTimeout(() => setIsGenerating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [activeId]);

  return (
    <section id="showcase" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">{t.showcase.title1} <span className="text-accent">{t.showcase.title2}</span></h2>
        <p className="text-foreground/40 text-sm md:text-base">{t.showcase.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
          {snippets.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={cn(
                "flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all text-left whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink",
                activeId === s.id 
                  ? "bg-accent text-background font-bold shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]" 
                  : "glass text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <s.icon size={18} className="md:w-5 md:h-5" />
              <span className="text-xs md:text-sm">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Code Editor View */}
        <div className={cn(
          "lg:col-span-5 glass rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col transition-all duration-500",
          isCodeCollapsed ? "h-fit lg:h-[64px]" : "h-[400px] md:h-[500px]"
        )}>
          <div className="px-4 md:px-6 py-3 md:py-4 border-b border-foreground/10 flex justify-between items-center bg-foreground/5 shrink-0">
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-accent md:w-4 md:h-4" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.showcase.sourceCode}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] font-mono text-accent px-2 py-0.5 md:py-1 rounded bg-accent/10 uppercase">
                {activeSnippet.language}
              </span>
              <button 
                onClick={() => setIsCodeCollapsed(!isCodeCollapsed)}
                className="p-1 hover:bg-foreground/5 rounded-lg transition-colors text-foreground/40 hover:text-accent"
                title={isCodeCollapsed ? t.showcase.expandCode : t.showcase.collapseCode}
              >
                {isCodeCollapsed ? <ChevronDown size={14} className="md:w-4 md:h-4" /> : <ChevronUp size={14} className="md:w-4 md:h-4" />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {!isCodeCollapsed && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="flex-1 p-4 md:p-6 overflow-auto font-mono text-xs md:text-sm leading-relaxed scrollbar-hide"
              >
                <pre className="text-foreground/80">
                  <code>{activeSnippet.code}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live Preview View */}
        <div className="lg:col-span-4 glass rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col h-[400px] md:h-[500px]">
          <div className="px-4 md:px-6 py-3 md:py-4 border-b border-foreground/10 flex items-center gap-2 bg-foreground/5">
            <Eye size={14} className="text-accent md:w-4 md:h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.showcase.livePreview}</span>
          </div>
          <div className="flex-1 p-3 md:p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full"
              >
                {activeSnippet.demo}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
