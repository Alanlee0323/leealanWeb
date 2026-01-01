import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 bg-bg-primary border-t border-border-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-sans font-bold text-white mb-6 block">
              SYNTH<span className="text-brand-primary">SAAS</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Building the future of automation with 80s aesthetic and modern performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-white transition-all shadow-glow hover:shadow-neon">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-white transition-all shadow-glow hover:shadow-neon">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-white transition-all shadow-glow hover:shadow-neon">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-mono">
          <p>© {new Date().getFullYear()} SynthSaaS Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span>System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};