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
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[40px] md:rounded-[60px] p-8 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[100px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">
              {t.contact.title1} <br />
              <span className="text-accent">{t.contact.title2}</span>
            </h2>
            <p className="text-foreground/60 text-base md:text-lg mb-8 md:mb-12">
              {t.contact.description}
            </p>
            
            <div className="flex gap-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/mehtabhaumik" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mehtabhaumik/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-accent hover:text-background transition-all hover:-translate-y-1"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <a 
              href="mailto:ui.bhaumik@gmail.com"
              className="block group p-8 glass rounded-[40px] hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-foreground/40 text-sm font-mono mb-2 uppercase tracking-widest">{t.contact.directEmail}</p>
                  <p className="text-2xl font-bold">ui.bhaumik@gmail.com</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </a>

            <div className="p-8 glass rounded-[40px]">
              <p className="text-foreground/40 text-sm font-mono mb-4 uppercase tracking-widest">{t.contact.quickMessage}</p>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={64} className="text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{t.contact.messageSent}</h3>
                  <p className="text-foreground/50">{t.contact.backSoon}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-accent font-mono text-sm hover:underline"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    required
                    type="text" 
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <input 
                    required
                    type="email" 
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <textarea 
                    required
                    placeholder={t.contact.form.message}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <button 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-accent text-background font-bold rounded-2xl hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        {t.contact.sending}
                      </>
                    ) : (
                      t.contact.form.send
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">{t.contact.error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-foreground/20 text-sm font-mono">
        <p>{t.contact.footer}</p>
      </footer>
    </section>
  );
}
