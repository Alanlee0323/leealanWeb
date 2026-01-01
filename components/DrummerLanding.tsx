
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, Mic2, ArrowRight, ChevronDown, Check, Star, Disc, Volume2, Wrench, Award, User, Instagram, Youtube, Mail } from 'lucide-react';
import { drumVideos, gigLog, careerTimeline, biography } from '../data/drumming';
import { GlassmorphismProfileCard } from './ui/profile-card-1';

// --- Reusable S33 Components ---

const LiquidButton: React.FC<{ children: React.ReactNode; primary?: boolean; onClick?: () => void }> = ({ children, primary, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      relative px-8 py-4 font-audiowide uppercase tracking-widest text-sm
      overflow-hidden transition-all duration-300
      ${primary 
        ? 'text-black bg-metal-highlight shadow-glow-silver' 
        : 'text-metal-highlight border border-metal-highlight/30 hover:border-metal-highlight hover:bg-metal-highlight/10'
      }
      rounded-full
    `}
  >
    <span className="relative z-10">{children}</span>
    {primary && <div className="absolute inset-0 bg-white/20 blur-md" />}
  </motion.button>
);

const LiquidCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-metal-surface/80 backdrop-blur-md border border-metal-highlight/10 shadow-metal rounded-2xl p-8 ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const LiquidHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-metal-bg">
    {/* Liquid Background */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-metal-highlight/5 rounded-fluid blur-[100px]" 
      />
       <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metal-accent/10 rounded-fluid blur-[80px]" 
      />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-metal-highlight/30 text-metal-accent font-orbitron text-xs tracking-[0.3em] uppercase backdrop-blur-sm">
          Drummer
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-audiowide text-metal-highlight mb-6 tracking-tighter drop-shadow-glow-silver">
          ALAN LEE
        </h1>
        <p className="max-w-2xl mx-auto text-metal-accent font-orbitron text-lg md:text-xl leading-relaxed mb-12">
          I am the current drummer for the act RIKI, specializing in minimalist funk and groove-based music. Currently open to session work and collab.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <LiquidButton primary>View Experience</LiquidButton>
          <LiquidButton>Contact Me</LiquidButton>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-metal-highlight/50">
      <ChevronDown size={32} />
    </div>
  </section>
);

const About = () => {
  return (
    <section className="py-20 bg-metal-surface border-y border-metal-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-metal-highlight/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
         <GlassmorphismProfileCard 
            avatarUrl="/drummer-photo.jpg" 
            name="Alan Lee"
            title="Session Drummer & Educator"
            bio={biography}
            socialLinks={[
              { id: 'instagram', icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/leealannn/' },
              { id: 'youtube', icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
              { id: 'mail', icon: Mail, label: 'Email', href: 'mailto:contact@leealan-tech.com' },
            ]}
            actionButton={{
              text: "Download CV",
              href: "#",
              onClick: () => window.alert("CV Download Initiated")
            }}
         />
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case 'technician': return Wrench;
      case 'teaching': return Mic2;
      case 'certification': return Award;
      default: return Volume2;
    }
  };

  const getColor = (cat: string) => {
    switch (cat) {
      case 'technician': return 'text-blue-400 border-blue-400/30 bg-blue-400/5';
      case 'teaching': return 'text-green-400 border-green-400/30 bg-green-400/5';
      case 'certification': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
      default: return 'text-red-400 border-red-400/30 bg-red-400/5';
    }
  };

  return (
    <section className="py-32 bg-metal-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-audiowide text-metal-highlight mb-6">Career Timeline</h2>
          <p className="text-metal-accent font-orbitron">Performance & Technical Operations Log</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Spine */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-metal-highlight/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {careerTimeline.map((event, index) => {
              const isEven = index % 2 === 0;
              const Icon = getIcon(event.category);
              const colorClass = getColor(event.category);

              return (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:items-center`}
                >
                  {/* Node */}
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-metal-bg border border-metal-highlight rounded-full md:-translate-x-[5px] z-10 shadow-[0_0_10px_white]" />

                  <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                     <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-[1.02] ${colorClass} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                        <div className="flex justify-between items-start mb-2">
                           <span className="font-orbitron text-xs tracking-wider opacity-80 border border-current px-2 py-0.5 rounded">
                             {event.date}
                           </span>
                           <Icon size={16} />
                        </div>
                        <h3 className="text-xl font-bold font-sans text-white mb-1">{event.title}</h3>
                        <div className="text-sm font-orbitron font-bold opacity-90 mb-2">{event.role}</div>
                        {event.location && (
                          <div className="text-xs font-mono opacity-70 mb-1 flex items-center gap-1">
                             <div className="w-1 h-1 bg-current rounded-full" /> {event.location}
                          </div>
                        )}
                        {event.description && (
                          <p className="text-xs opacity-60 mt-2 border-t border-current/20 pt-2">
                            {event.description}
                          </p>
                        )}
                     </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoGrid = () => (
  <section className="py-32 bg-metal-surface relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-audiowide text-metal-highlight mb-16 text-center">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {drumVideos.map((video) => (
          <div key={video.id} className="group relative aspect-video bg-black rounded-xl overflow-hidden border border-metal-highlight/20 shadow-metal hover:border-metal-highlight/60 transition-all duration-500">
             <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${video.videoId}`} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-audiowide text-white text-sm truncate">{video.title}</h3>
              </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-32 bg-metal-bg">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-audiowide text-metal-highlight mb-12 text-center">System Queries</h2>
      <div className="space-y-4">
        {[
          { q: "Do you offer remote recording?", a: "Yes. I operate a fully treated home studio with industry-standard multichannel capture capabilities." },
          { q: "What genres do you specialize in?", a: "My core programming includes Math Rock, Progressive Metal, Jazz Fusion, and Electronic hybrid setups." },
          { q: "Are lessons available via Zoom?", a: "Affirmative. I utilize a 3-camera setup with high-fidelity audio routing for seamless remote instruction." }
        ].map((item, i) => (
          <details key={i} className="group bg-metal-surface border border-metal-highlight/10 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-orbitron text-white group-hover:text-metal-highlight transition-colors">
              {item.q}
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-metal-accent font-sans leading-relaxed border-t border-metal-highlight/5 pt-4">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

// --- Main Page Component ---

export const DrummerLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-metal-bg text-white selection:bg-metal-highlight selection:text-black font-sans">
      <LiquidHero />
      <About />
      <ExperienceTimeline />
      <VideoGrid />
      <FAQ />
      
      <footer className="py-12 bg-black border-t border-metal-border text-center">
        <div className="container mx-auto px-6">
           <h4 className="font-audiowide text-2xl text-metal-highlight mb-4">ALAN LEE</h4>
           <p className="font-orbitron text-xs text-metal-accent uppercase tracking-widest mb-8">
             Audio / Visual / Kinetic
           </p>
           <div className="flex justify-center gap-6 text-sm text-metal-accent font-orbitron">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">YouTube</a>
             <a href="#" className="hover:text-white transition-colors">Email</a>
           </div>
        </div>
      </footer>
    </div>
  );
};
