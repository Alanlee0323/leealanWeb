import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gateway } from './components/ui/Gateway';
import { SystemNav } from './components/SystemNav';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { TechMarquee } from './components/TechMarquee';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { DrummerLanding } from './components/DrummerLanding';

type ViewMode = 'gateway' | 'engineer' | 'drummer';

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('gateway');

  const handleModeSwitch = (newMode: 'engineer' | 'drummer') => {
    setMode(newMode);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReset = () => {
    setMode('gateway');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-white overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        
        {/* State 1: Gateway / Landing */}
        {mode === 'gateway' && (
          <motion.div 
            key="gateway"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <Gateway onSelect={handleModeSwitch} />
          </motion.div>
        )}

        {/* State 2 & 3: Content Modes */}
        {mode !== 'gateway' && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Persistent Top Nav */}
            <SystemNav 
              currentMode={mode} 
              onSwitch={handleModeSwitch} 
              onReset={handleReset} 
            />

            {/* Content Logic */}
            <div id="content-start" className="relative z-20 min-h-screen">
              
              {/* Engineering Content */}
              {mode === 'engineer' && (
                <div className="bg-bg-primary">
                  <Hero mode="engineer" />
                  <TechMarquee />
                  <BentoGrid />
                  <Timeline />
                  <Footer />
                </div>
              )}

              {/* Drumming Content - S33 Style */}
              {mode === 'drummer' && (
                <DrummerLanding />
              )}

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
};

export default App;