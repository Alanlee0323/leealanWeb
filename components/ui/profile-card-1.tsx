
import React, { useState } from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight, Mail, Instagram, Youtube, LucideIcon } from 'lucide-react';

//================================================================================
// REUSABLE COMPONENT
//================================================================================

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface ActionButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export interface GlassmorphismProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton?: ActionButtonProps;
}

/**
 * --- Glassmorphism Profile Card Component ---
 * Adapted for S33 Liquid Metal Theme (Dark/Silver)
 */
export const GlassmorphismProfileCard: React.FC<GlassmorphismProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div 
        className="relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-xl bg-metal-surface/60 border-metal-highlight/20 hover:border-metal-highlight/40"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Avatar Container */}
        <div className="w-32 h-32 mb-6 rounded-full p-1 border-2 border-metal-highlight/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <img 
            src={avatarUrl} 
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/128x128/111/FFF?text=${name.charAt(0)}`; }}
          />
        </div>

        <h2 className="text-3xl font-audiowide text-white tracking-wide">{name}</h2>
        <p className="mt-2 text-sm font-orbitron font-medium text-metal-highlight uppercase tracking-widest">{title}</p>
        
        <p className="mt-6 text-center text-sm leading-relaxed text-metal-accent font-sans whitespace-pre-line">
          {bio}
        </p>

        <div className="w-1/2 h-px my-8 rounded-full bg-gradient-to-r from-transparent via-metal-highlight/30 to-transparent" />

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((item) => (
            <SocialButton key={item.id} item={item} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
          ))}
        </div>

        {actionButton && <ActionButton action={actionButton} />}
      </div>
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-3xl opacity-20 bg-gradient-to-b from-metal-highlight/20 to-transparent pointer-events-none" />
    </div>
  );
};

// --- Sub-components ---

const SocialButton: React.FC<{ 
  item: SocialLink; 
  setHoveredItem: (id: string | null) => void; 
  hoveredItem: string | null;
}> = ({ item, setHoveredItem, hoveredItem }) => (
  <div className="relative">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-metal-bg border border-metal-highlight/20 hover:border-metal-highlight hover:bg-metal-highlight/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon size={20} className="transition-all duration-200 ease-out text-metal-accent group-hover:text-white" />
      </div>
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const ActionButton: React.FC<{ action: ActionButtonProps }> = ({ action }) => (
  <button
    onClick={action.onClick}
    className="flex items-center gap-2 px-8 py-3 mt-8 rounded-full font-audiowide text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-metal-highlight text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
  >
    <span>{action.text}</span>
    <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
  </button>
);

const Tooltip: React.FC<{ item: SocialLink; hoveredItem: string | null }> = ({ item, hoveredItem }) => (
  <div 
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border border-metal-highlight/20 text-xs font-orbitron text-white whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-black/80 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-black/80 border-b border-r border-metal-highlight/20" />
  </div>
);
