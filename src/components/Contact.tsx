import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "../LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto glass rounded-[32px] md:rounded-[60px] p-6 md:p-16 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[100px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-8 uppercase tracking-tighter leading-none">
              {t.contact.title1} <br />
              <span className="text-accent">{t.contact.title2}</span>
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base md:text-lg mb-6 md:mb-12 max-w-md">
              {t.contact.description}
            </p>
            
            <div className="flex gap-4 sm:gap-6 mb-8 lg:mb-0 mt-auto">
              {[
                { icon: Github, href: "https://github.com/mehtabhaumik", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mehtabhaumik/", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass flex items-center justify-center hover:bg-accent hover:text-background transition-all hover:-translate-y-1 border border-foreground/5"
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <a 
              href="mailto:ui.bhaumik@gmail.com"
              className="block group p-6 sm:p-8 glass rounded-[24px] sm:rounded-[40px] hover:border-accent/50 transition-all border border-foreground/5"
            >
              <div className="flex justify-between items-center gap-4">
                <div className="min-w-0">
                  <p className="text-accent text-[10px] font-mono mb-1 uppercase tracking-widest">{t.contact.directEmail}</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold truncate">ui.bhaumik@gmail.com</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors shrink-0">
                  <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                </div>
              </div>
            </a>

            <div className="p-6 sm:p-8 glass rounded-[24px] sm:rounded-[40px] border border-foreground/5">
              <p className="text-foreground/40 text-[10px] font-mono mb-4 uppercase tracking-widest">{t.contact.quickMessage}</p>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 md:py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-accent mb-4 md:w-16 md:h-16" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{t.contact.messageSent}</h3>
                  <p className="text-foreground/50 text-sm md:text-base">{t.contact.backSoon}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 md:mt-8 text-accent font-mono text-xs md:text-sm hover:underline"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <input 
                      required
                      type="text" 
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <input 
                      required
                      type="email" 
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <textarea 
                    required
                    placeholder={t.contact.form.message}
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                  <button 
                    disabled={status === 'loading'}
                    className="w-full py-3 md:py-4 bg-accent text-background font-bold rounded-xl md:rounded-2xl hover:bg-accent/80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        {t.contact.sending}
                      </>
                    ) : (
                      t.contact.form.send
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-[10px] md:text-sm text-center">{t.contact.error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-12 md:mt-20 text-center text-foreground/20 text-[10px] md:text-sm font-mono px-4">
        <p className="max-w-2xl mx-auto leading-relaxed">{t.contact.footer}</p>
      </footer>
    </section>
  );
}
