import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Headphones, Power } from 'lucide-react';

interface SystemNavProps {
  currentMode: 'engineer' | 'drummer';
  onSwitch: (mode: 'engineer' | 'drummer') => void;
  onReset: () => void;
}

export const SystemNav: React.FC<SystemNavProps> = ({ currentMode, onSwitch, onReset }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle flex items-center justify-between px-6"
    >
      <div 
        onClick={onReset}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className={`w-2 h-2 rounded-full animate-pulse ${currentMode === 'engineer' ? 'bg-accent-primary' : 'bg-accent-secondary'}`} />
        <span className="font-bold text-lg tracking-tight text-white group-hover:text-text-code transition-colors">
          ALAN LEE
        </span>
        <span className="hidden md:block text-xs font-mono text-text-muted px-2 py-1 rounded bg-bg-secondary border border-border-subtle uppercase">
          SYS: {currentMode}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => onSwitch('engineer')}
          className={`p-2 rounded-md transition-all ${
            currentMode === 'engineer' 
              ? 'text-accent-primary bg-accent-primary/10 shadow-[0_0_10px_rgba(0,112,243,0.3)]' 
              : 'text-text-muted hover:text-white hover:bg-white/5'
          }`}
          title="Switch to Engineering"
        >
          <Terminal size={18} />
        </button>
        
        <button 
          onClick={() => onSwitch('drummer')}
          className={`p-2 rounded-md transition-all ${
            currentMode === 'drummer' 
              ? 'text-accent-secondary bg-accent-secondary/10 shadow-[0_0_10px_rgba(121,40,202,0.3)]' 
              : 'text-text-muted hover:text-white hover:bg-white/5'
          }`}
          title="Switch to Drums"
        >
          <Headphones size={18} />
        </button>

        <div className="w-px h-6 bg-border-subtle mx-2" />

        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-warning transition-colors"
        >
          <Power size={14} />
          <span className="hidden md:inline">JACK OUT</span>
        </button>
      </div>
    </motion.nav>
  );
};