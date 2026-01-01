import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const BentoGrid: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border-subtle pb-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="w-2 h-8 bg-accent-primary" />
            SYSTEM REGISTRY
          </h2>
          <p className="text-text-muted font-mono text-sm">
            // Access restricted to authorized personnel
          </p>
        </motion.div>
        
        <div className="font-mono text-xs text-text-code mt-4 md:mt-0">
          STATUS: ALL SYSTEMS NOMINAL
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};