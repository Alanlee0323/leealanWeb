import React from 'react';
import { FEATURES } from '../data/content';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
            NEXT-GEN <span className="text-brand-primary">CAPABILITIES</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Equipped with the tools you need to dominate the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-xl bg-bg-primary border border-border-subtle hover:border-brand-primary transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-lg bg-bg-secondary border border-border-subtle flex items-center justify-center group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-brand-accent" />
                </div>
                
                <h3 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};