import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-center text-white mb-16">
          SYSTEM <span className="text-brand-secondary">QUERY</span>
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`border rounded-lg transition-all duration-300 ${
                  isOpen ? 'bg-bg-primary border-brand-primary' : 'bg-bg-primary/50 border-border-subtle hover:border-brand-secondary/50'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-sans font-medium text-lg ${isOpen ? 'text-brand-primary' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? <Minus className="text-brand-primary" /> : <Plus className="text-text-muted" />}
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-border-subtle/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};