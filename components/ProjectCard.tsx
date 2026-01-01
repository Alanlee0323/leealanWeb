import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Circle } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusColor = {
  online: "text-accent-success shadow-[0_0_8px_rgba(16,185,129,0.4)]",
  beta: "text-accent-warning shadow-[0_0_8px_rgba(245,158,11,0.4)]",
  maintenance: "text-accent-warning animate-pulse",
  offline: "text-accent-offline",
};

const statusLabel = {
  online: "SYSTEM ONLINE",
  beta: "BETA CHANNEL",
  maintenance: "MAINTENANCE",
  offline: "OFFLINE",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isLarge = project.size === 'large';
  const isMedium = project.size === 'medium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        relative group flex flex-col border border-border-subtle bg-bg-panel backdrop-blur-sm overflow-hidden
        ${isLarge ? 'md:col-span-2 md:row-span-2 min-h-[420px]' : ''}
        ${isMedium ? 'md:col-span-1 md:row-span-2 min-h-[420px]' : ''}
        ${!isLarge && !isMedium ? 'min-h-[200px]' : ''}
      `}
    >
      {/* Decorative Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-text-muted/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-text-muted/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-text-muted/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-text-muted/50" />

      {/* Header Bar */}
      <div className="flex items-center justify-between p-3 border-b border-border-subtle bg-bg-secondary/50">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-accent-primary" />
          <span className="text-xs font-mono text-text-muted">{project.systemId}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-wider text-text-muted hidden sm:block">
            {project.version}
          </span>
          <div className={`w-2 h-2 rounded-full ${statusColor[project.status]}`} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col relative z-10">
        <h3 className="text-xl font-bold text-text-primary mb-2 tracking-tight group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm font-mono leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono text-accent-primary border border-border-subtle bg-bg-secondary">
              {t}
            </span>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-3 mt-auto">
          {project.status === 'online' || project.status === 'beta' ? (
             <a 
               href={project.subdomainUrl || "#"}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/50 text-accent-primary text-xs font-mono uppercase tracking-wider hover:bg-accent-primary hover:text-white transition-all duration-300"
             >
               <ExternalLink size={14} />
               <span>Launch System</span>
             </a>
          ) : (
             <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-border-subtle/20 border border-border-subtle text-text-muted text-xs font-mono uppercase tracking-wider cursor-not-allowed">
                <Circle size={10} />
                <span>{statusLabel[project.status]}</span>
             </div>
          )}
          
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-2 border border-border-subtle text-text-muted hover:text-white hover:border-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Hover Background Grid Effect */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none"
        style={{ backgroundSize: '20px 20px' }} 
      />
    </motion.div>
  );
};