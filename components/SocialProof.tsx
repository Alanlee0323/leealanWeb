import React from 'react';

const LOGOS = ["CYBERCORP", "NEXUS", "TYRELL", "ARASAKA", "OMNI", "MASSIVE"];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-10 border-y border-border-subtle bg-bg-secondary/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-mono text-text-muted mb-6 uppercase tracking-widest">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-sans font-bold text-white hover:text-brand-accent hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all cursor-default select-none">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};