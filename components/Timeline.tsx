import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/projects';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Experience Log
      </motion.h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 items-start md:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-bg-primary border-2 border-accent-primary rounded-full md:-translate-x-1/2 translate-y-1 md:translate-y-0 z-10 shadow-[0_0_10px_rgba(0,112,243,0.5)]" />

                {/* Content Box */}
                <div className="ml-8 md:ml-0 md:w-1/2 pl-0 md:px-8">
                  <div className="glass-panel p-6 rounded-xl hover:border-accent-primary/30 transition-colors">
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-mono text-accent-secondary bg-accent-secondary/10 rounded">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <h4 className="text-text-secondary mb-4 font-mono text-sm">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-xs text-text-code">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};