import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
  "PyTorch", "TensorRT", "ONNX", "Deep Learning", "Computer Vision", "YOLOv5", "Python", "Docker", "Linux", "React", "TypeScript", "Tailwind", "Machine Learning", "CUDA"
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-border-subtle bg-bg-secondary/30 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-bg-primary to-transparent z-10" />
      
      <div className="flex">
        <motion.div 
          className="flex gap-16 px-8 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span 
              key={`${tech}-${i}`} 
              className="text-2xl md:text-3xl font-bold text-text-secondary/50 hover:text-accent-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};