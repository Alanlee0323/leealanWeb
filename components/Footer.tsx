import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 bg-bg-primary border-t border-border-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-sans font-bold text-white mb-6 block">
              ALAN<span className="text-accent-primary">LEE</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              AI Engineer & Percussionist. Bridging the gap between intelligent systems and dynamic rhythms.
            </p>
            <div className="flex gap-4">
              <a href="mailto:alanalanalan0807@gmail.com" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-accent-primary hover:text-white transition-all">
                <Mail size={18} />
              </a>
              <a href="https://github.com/alanlee0323" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-accent-primary hover:text-white transition-all">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/alan-lee-6b4647294" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-accent-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="hidden md:block"></div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-accent-primary transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-mono">
          <p>© {new Date().getFullYear()} Alan Lee. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span>System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};