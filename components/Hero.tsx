import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Database, Server, Cpu, Music, Mic2, Activity } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { ShaderAnimation } from './ui/ShaderAnimation';

interface HeroProps {
  mode: 'engineer' | 'drummer';
}

export const Hero: React.FC<HeroProps> = ({ mode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('content-start');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const isEngineer = mode === 'engineer';
  const primaryColor = isEngineer ? 'text-accent-primary' : 'text-accent-secondary';
  const bgAccent = isEngineer ? 'bg-accent-primary' : 'bg-accent-secondary';

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-bg-primary/40 pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            key={mode} // Re-animate on mode switch
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className={`w-2 h-2 ${bgAccent} animate-pulse`} />
            <span className={`text-xs font-mono ${primaryColor} tracking-widest uppercase`}>
              {isEngineer ? 'Central Nexus Connected' : 'Audio Signal Live'}
            </span>
          </motion.div>

          <motion.h1 
            key={`${mode}-h1`}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Alan Lee
            <span className="block text-text-secondary text-3xl md:text-5xl mt-2 font-medium">
              {isEngineer ? 'AI Engineer' : 'Percussionist'}
            </span>
          </motion.h1>

          <motion.p 
            key={`${mode}-p`}
            className="text-text-muted text-lg max-w-xl mb-10 leading-relaxed font-mono backdrop-blur-sm p-2 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isEngineer 
              ? "// Optimizing Smart Manufacturing with AI. Deploying Deep Learning models from cloud to edge."
              : "// Delivering precision rhythm and dynamic grooves. Exploring the intersection of human feel and technical accuracy."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <MagneticButton onClick={scrollToContent}>
              {isEngineer ? 'Initialize Grid' : 'View Session Logs'}
            </MagneticButton>
            
            <a 
              href={isEngineer ? "https://github.com/alanlee" : "https://youtube.com"} 
              target="_blank" 
              className="px-8 py-3 rounded-full border border-border-subtle bg-bg-primary/50 backdrop-blur-md text-text-secondary hover:text-white hover:border-text-primary transition-all font-mono text-sm flex items-center gap-2"
            >
               {isEngineer ? 'View Source' : 'Watch Videos'} <ChevronRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Data Stream */}
        <div className="lg:col-span-5 hidden lg:block">
           <motion.div 
             key={mode} // Re-animate
             className="relative w-full aspect-square border border-border-subtle bg-bg-panel/50 backdrop-blur-md rounded-lg overflow-hidden p-6 shadow-2xl"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
           >
              {/* Header of fake terminal/display */}
              <div className="flex justify-between items-center mb-6 border-b border-border-subtle pb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-border-subtle" />
                    <div className="w-3 h-3 rounded-full bg-border-subtle" />
                 </div>
                 <div className="text-xs font-mono text-text-muted">
                    {isEngineer ? 'monitor_sys.log' : 'audio_out.wav'}
                 </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 font-mono text-xs">
                 {isEngineer ? (
                    // Engineer Visuals
                    <>
                       <div className="flex justify-between text-text-muted">
                          <span className="flex items-center gap-2"><Server size={14} /> UPTIME</span>
                          <span className="text-accent-primary">99.998%</span>
                       </div>
                       <div className="w-full bg-bg-secondary h-1 rounded overflow-hidden">
                          <div className="h-full bg-accent-primary w-[99%]" />
                       </div>
                       <div className="flex justify-between text-text-muted mt-6">
                          <span className="flex items-center gap-2"><Cpu size={14} /> LOAD</span>
                          <span className="text-accent-success">OPTIMAL</span>
                       </div>
                       <div className="grid grid-cols-8 gap-1">
                          {[1,1,1,1,0,0,0,0].map((v, i) => (
                             <div key={i} className={`h-6 rounded-sm ${v ? 'bg-accent-primary/50' : 'bg-border-subtle/30'}`} />
                          ))}
                       </div>
                    </>
                 ) : (
                    // Drummer Visuals
                    <>
                       <div className="flex justify-between text-text-muted">
                          <span className="flex items-center gap-2"><Activity size={14} /> GAIN</span>
                          <span className="text-accent-secondary">+6.2dB</span>
                       </div>
                       <div className="w-full bg-bg-secondary h-1 rounded overflow-hidden">
                          <div className="h-full bg-accent-secondary w-[75%]" />
                       </div>
                       <div className="flex justify-between text-text-muted mt-6">
                          <span className="flex items-center gap-2"><Mic2 size={14} /> INPUT</span>
                          <span className="text-white">STEREO_L/R</span>
                       </div>
                       <div className="flex items-end gap-1 h-16 mt-2">
                          {[0.4, 0.7, 0.3, 0.9, 0.6, 0.2, 0.5, 0.8, 0.4, 0.6].map((h, i) => (
                             <motion.div 
                                key={i}
                                animate={{ height: [`${h * 100}%`, `${Math.random() * 100}%`] }}
                                transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
                                className="flex-1 bg-accent-secondary/60 rounded-sm" 
                             />
                          ))}
                       </div>
                    </>
                 )}

                 <div className="text-text-muted/50 mt-4 pt-4 border-t border-border-subtle border-dashed">
                    &gt; {isEngineer ? 'Scanning sub-systems...' : 'Calibrating latency...'} <br/>
                    &gt; {isEngineer ? 'Connection established.' : 'Metronome sync: ON'} <br/>
                    &gt; Ready.
                    <span className="animate-pulse">_</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};