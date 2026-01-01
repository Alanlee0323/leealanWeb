import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Headphones, ArrowRight } from 'lucide-react';
import { ShaderAnimation } from './ShaderAnimation';

interface GatewayProps {
  onSelect: (mode: 'engineer' | 'drummer') => void;
}

export const Gateway: React.FC<GatewayProps> = ({ onSelect }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <ShaderAnimation />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
            ALAN LEE
          </h1>
          <p className="text-text-secondary font-mono text-sm md:text-base tracking-[0.2em] uppercase">
            Select Interface Protocol
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Engineering Card */}
          <motion.button
            onClick={() => onSelect('engineer')}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative h-64 md:h-80 rounded-2xl border border-border-subtle bg-bg-glass backdrop-blur-xl overflow-hidden text-left p-8 hover:border-accent-primary transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Terminal size={48} className="text-text-muted group-hover:text-accent-primary transition-colors duration-500" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">Engineering</h2>
                <p className="text-text-secondary font-mono text-sm mb-4">
                  // System Architecture<br/>
                  // Full Stack Dev<br/>
                  // Scalable Code
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>INITIALIZE</span> <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Drumming Card */}
          <motion.button
            onClick={() => onSelect('drummer')}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative h-64 md:h-80 rounded-2xl border border-border-subtle bg-bg-glass backdrop-blur-xl overflow-hidden text-left p-8 hover:border-accent-secondary transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-accent-secondary/5 group-hover:bg-accent-secondary/10 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Headphones size={48} className="text-text-muted group-hover:text-accent-secondary transition-colors duration-500" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-accent-secondary transition-colors">Audio/Visual</h2>
                <p className="text-text-secondary font-mono text-sm mb-4">
                  // Session Drummer<br/>
                  // Live Performance<br/>
                  // Rhythm Education
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>LOAD SIGNAL</span> <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};