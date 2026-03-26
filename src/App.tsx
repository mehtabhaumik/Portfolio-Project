/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { AIFocus } from "./components/AIFocus";
import { Projects } from "./components/Projects";
import { CodeShowcase } from "./components/CodeShowcase";
import { Contact } from "./components/Contact";
import { MouseGlow } from "./components/MouseGlow";
import { GreetingAvatar } from "./components/GreetingAvatar";
import { motion, useScroll, useSpring } from "motion/react";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <LanguageProvider>
      <main className="relative bg-bg min-h-screen">
        <MouseGlow />
        <GreetingAvatar />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <div className="relative z-10">
          <Hero />
          <Experience />
          <Skills />
          <AIFocus />
          <Projects />
          <CodeShowcase />
          <Contact />
        </div>

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg via-transparent to-bg" />
        </div>
      </main>
    </LanguageProvider>
  );
}
